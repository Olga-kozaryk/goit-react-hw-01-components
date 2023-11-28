import { Profile } from "./Profile/Profile";
import user from '../json-home-work/user.json';

import { Statistics } from "./Statistics/Statistics";
import data from '../json-home-work/data.json';

import { FriendList } from "./FriendListComponents/FriendList/FriendList";
import friends from '../json-home-work/friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../json-home-work/transactions.json';

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
