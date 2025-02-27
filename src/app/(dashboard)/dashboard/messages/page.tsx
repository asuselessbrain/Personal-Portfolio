type Message = {
  _id: string;
  name: string;
  email: string;
  message: string;
};
const MessagesPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/messages`, {
    cache: "no-store",
  });
  const data = await res.json();
  const messages = data?.data
  console.log(messages);
  return (
    <div className="w-full m-10">
      <h2 className="text-3xl md:text-6xl text-center mb-10 font-bold">
        Messages
      </h2>
      <div className="relative overflow-x-auto max-h-[90vh]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {messages?.map((message: Message) => (
              <tr
                key={message._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {message.name}
                </td>
                <td className="px-6 py-4">{message.email}</td>
                <td className="px-6 py-4">{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessagesPage;
