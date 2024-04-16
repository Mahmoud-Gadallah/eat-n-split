import Button from './Button';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import FriendsList from './FriendsList';

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
