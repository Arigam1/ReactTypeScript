import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creator/user';

const UserList: React.FC = () => {
    const { error, loading, users } = useTypedSelector(state => state.user)    //ctr+space
    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.name}
                </div>)}
        </div>
    );
};

export default UserList;