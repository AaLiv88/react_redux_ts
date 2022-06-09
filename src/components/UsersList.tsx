import React, { useEffect } from 'react';
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/actionCreators/users";
import { useAction } from "../hooks/useAction";

const UsersList = () => {
    const { users, error, isLoading } = useTypeSelector(state => state.users);
    const { fetchUsers } = useAction();

    useEffect(() => {
        fetchUsers();
    });

    if (isLoading) {
        return <h1>загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </div>
    );
};

export default UsersList;