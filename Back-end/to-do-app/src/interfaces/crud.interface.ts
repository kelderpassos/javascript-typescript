interface Create<I, O> { create: (obj: I) => Promise<O | null> }
interface ReadAll<O> { readAll(): Promise<O[]>}
interface ReadOne<I, O> { readOne(id: string): Promise<O | null> }
interface Update<I, O> { update(id: string, obj: Partial<I>): Promise<O | null> }
interface Delete<I, O> { delete(id: string): Promise<O | null> }

export interface CrudMethods<T> extends
  Create<T, T>,
  ReadAll<T>,
  ReadOne<T, T>,
  Update<T, T>,
  Delete<T, T> {} 