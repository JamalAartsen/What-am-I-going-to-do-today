import { fetchData } from "../DataSource/ActivityDataSource";

export async function getActivity() {
    const { result, error } = await fetchData()
    return { result, error }
}