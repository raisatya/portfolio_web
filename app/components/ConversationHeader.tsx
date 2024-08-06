

const ConversationHeader = ({ headerTitle } : { headerTitle : string }) => {
    return (
        <div className="flex justify-start items-center space-x-2">
        <img
          src="ProfileImage.jpg"
          className="w-10 h-10 rounded-full ring-2 ring-gray-300 ring-offset-2"
        />
        <p className="font-medium text-lg text-purple-950">Satya Rai | {headerTitle}</p>
      </div>
    )
}

export default ConversationHeader;