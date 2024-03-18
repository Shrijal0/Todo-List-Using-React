const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className="text-center text-black bg-white text-4xl font-bold w-full p-10">
      <span className="m-14">Completed Todo : {completedTodos}</span> 
      <span>Total Todos : {totalTodos}</span>
    </div>
  );
};

export default Footer;
