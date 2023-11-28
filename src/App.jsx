import { Profile } from "./components/ProfileComponent/Profile";
import user from './data-home-work/user';

import { Statistics } from "./components/Statistics/Statistics";
import data from './data-home-work/data';

import { FriendList } from "./components/FriendListComponents/FriendList/FriendList";
import friends from './data-home-work/friends';

import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import transactions from './data-home-work/transactions';

export const App = () => {
  return (
    <div

    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      color: '#010101',
    }}
    >
      
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <FriendList friends={friends}/>

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
