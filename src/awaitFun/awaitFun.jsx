import axios from "axios";

const MyAccesToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVkMDBmOWU2N2ZiYjc0MzFhNzBhZTRhYzgxMjI2OSIsIm5iZiI6MTc0NzMwMzk0Mi43MTEsInN1YiI6IjY4MjViZTA2NWFhYTI1NjQxYWFkYTNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3cR8RLsiA2BbwDwmxcgMJLf6_XRnUt-u6VjO8vvys5Q";
const awaitFun = async(url) => {
    const response = await axios.get(url,{
        headers: {
            Authorization: `Bearer ${MyAccesToken}`,
        },
    });
    return response.data;
}
export default awaitFun;