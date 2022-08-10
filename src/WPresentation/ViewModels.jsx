import { useState } from "react"
import { getActivityUseCase } from "../WDomain/GetActivity"

export default function ActivityViewModel() {
    const [error, setError] = useState("")
    const [activity, setActitivity] = useState("Click on next to start!")
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)

    async function getActivity() {
        const { result, error } = await getActivityUseCase()

        setError(error)
        //TODO: Called multiple times
        setActitivity(result.activity)
        console.log(result.activity)
        setLoading(false)
        setDisable(false)
    }

    return {
        error,
        getActivity,
        activity,
        loading,
        setLoading,
        disable, 
        setDisable
    }
} 