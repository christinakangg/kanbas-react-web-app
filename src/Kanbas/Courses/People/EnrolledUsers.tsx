import PeopleTable from "./Table";
import * as client from "../client"
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function EnrolledUsers(){
    const [users, setUsers] = useState<any[]>([]);
    const { cid } = useParams(); 
    
    const fetchUsers = async () => {
        const users = await client.findUsersForCourse(cid);
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, [cid]);

    return(
        <div>
            <PeopleTable users={users} />
        </div>
    )
}