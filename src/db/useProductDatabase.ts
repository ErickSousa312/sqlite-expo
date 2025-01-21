import { SQLiteExecuteAsyncResult, useSQLiteContext } from "expo-sqlite";

export type ProductDatabase = {
  id: number;
  name: string;
  quantity: number;
};

export function useProductDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<ProductDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO products (name, quantity) VALUES ($name, $quantity)",
    );
    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $quantity: data.quantity,
      });
      console.log(result);

      const insertRowId = result.getFirstAsync();

      return { insertRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function readAll(): Promise<ProductDatabase[]> {
    const statement = await database.prepareAsync("SELECT * FROM products");

    try {
      const result = await statement.executeAsync();
      const items = await result.getAllAsync();
      return items as ProductDatabase[];
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function readById(id: number): Promise<ProductDatabase | null> {
    const statement = await database.prepareAsync(
      "SELECT * FROM products WHERE id = $id",
    );

    try {
      const result = await statement.executeAsync({ $id: id });
      const item = await result.getFirstAsync();
      return result.changes > 0 ? (item as ProductDatabase) : null;
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function update(
    id: number,
    data: Partial<Omit<ProductDatabase, "id">>,
  ) {
    const statement = await database.prepareAsync(
      "UPDATE products SET name = COALESCE($name, name), quantity = COALESCE($quantity, quantity) WHERE id = $id",
    );

    try {
      const result: SQLiteExecuteAsyncResult<ProductDatabase> =
        await statement.executeAsync({
          $id: id,
          $name: data.name ?? null,
          $quantity: data.quantity ?? null,
        });

      return result.changes > 0;
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function remove(id: number) {
    const statement = await database.prepareAsync(
      "DELETE FROM products WHERE id = $id",
    );

    try {
      const result = await statement.executeAsync({ $id: id });
      return result.changes > 0;
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  return { create, readAll, readById, update, remove };
}
