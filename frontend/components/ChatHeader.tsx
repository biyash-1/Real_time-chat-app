import { X } from "lucide-react";
import { useChatStore } from "../app/store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();

  // Check if selectedUser is null before accessing its properties
  if (!selectedUser) {
    return (
      <div className="p-2.5 border-b border-base-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>No user selected</span>
          </div>
          <button onClick={() => setSelectedUser(null)}>
            <X />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2.5  border-base-300">
      <div className="flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <img
              src={selectedUser.profilePicture || "/avatar.png"}
              alt={selectedUser.username}
              className="w-full h-full object-cover"
            />
          </div>

          {/* User info */}
          <div className="text-base font-medium">{selectedUser.username}</div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
