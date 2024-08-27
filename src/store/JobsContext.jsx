import { createContext, useState, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


export const JobsContext = createContext();

export const JobsDataProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState({})
    
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "Jobs"));
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(usersData);
        setLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
    
      const handleSearchData = (searchedData) => {
        setSearchData(searchedData);
      }

    return(
        <JobsContext.Provider value={{data, loading, searchData, handleSearchData}}>
            {children}
        </JobsContext.Provider>
    )
}
