import { Profile } from "./Profile/profile";
import user from './Profile/user.json';

import { Statistics } from "./Statistics/statistics";
import data from './Statistics/data.json';

import { FriendList } from "./FriendList/friendList";
import friends from './FriendList/friends.json';

import { TransactionHistory } from "./TransactionHistory/transactionHistory";
import transactions from './TransactionHistory/transactions.json';

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
