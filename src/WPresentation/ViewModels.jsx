import { useState } from "react"
import { getActivityUseCase } from "../WDomain/GetActivity"

export default function ActivityViewModel() {
    const [error, setError] = useState("")
    const [activity, setActitivity] = useState("")

    async function getActivity() {
        const { result, error } = await getActivityUseCase()
        
        setError(error)
        // TODO: Called multiple times
        setActitivity(result.activity)
    }

    return {
        error, 
        getActivity, 
        activity
    }
} 