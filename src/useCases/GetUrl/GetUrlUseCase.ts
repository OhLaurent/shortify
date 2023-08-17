import { IUrlRepository } from "../../repositories/IUrlRepository";
import { IGetUrlDTO } from "./IGetUrlDTO";

export class GetUrlUseCase {
    private repository: IUrlRepository

    constructor(repo: IUrlRepository) {
        this.repository = repo
    }

    public async execute(props: IGetUrlDTO) {
        const repo = this.repository

        const url = await repo.getById(props.id)

        if(!url) {
            throw new Error("Couldn't find url.")
        }

        return url
    }
}