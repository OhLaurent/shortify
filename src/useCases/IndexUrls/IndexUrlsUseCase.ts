import { IUrlRepository } from "../../repositories/IUrlRepository";

export class IndexUrlsUseCase {
    private repository: IUrlRepository

    constructor(repo: IUrlRepository) {
        this.repository = repo
    }

    public async execute() {
        const repo = this.repository

        const urls = await repo.index()

        return urls
    }
}