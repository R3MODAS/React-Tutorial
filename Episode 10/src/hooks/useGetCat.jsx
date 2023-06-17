import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

function useGetCat() {

const {data, isLoading : CatLoading, refetch} = useQuery(["cat"], async() => {
    return Axios.get("https://catfact.ninja/fact").then(res => res.data)
})    

const refetchData = () => {
    refetch();
}

return {data, CatLoading, refetchData};

}

export default useGetCat