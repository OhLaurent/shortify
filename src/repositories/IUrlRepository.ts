import { Url } from "../entities/Url";

export interface IUrlRepository {
    save(url: Url): Promise<Url>;
    getById(id: string): Promise<Url>;
    index(): Promise<Url[]>
}