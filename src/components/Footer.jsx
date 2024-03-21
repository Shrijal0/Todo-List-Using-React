const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center text-center text-black bg-white text-3xl md:text-4xl font-bold w-full p-10">
      <span>Completed Todo : {completedTodos}</span> 
      <span>Total Todos : {totalTodos}</span>
    </div>
  );
};

export default Footer;
