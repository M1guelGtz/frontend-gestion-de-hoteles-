import { UserRepository } from "../Data/repository/userRepository";

const repository = new UserRepository();

export const loginUsecase =  {
    async loginUseCase (email: string, password: string) {
        return await repository.login(email, password);
    }
}
