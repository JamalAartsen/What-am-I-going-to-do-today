import { getActivity } from "../WData/Repository/ActivityRepository";

export async function getActivityUseCase() {
    return await getActivity()
}