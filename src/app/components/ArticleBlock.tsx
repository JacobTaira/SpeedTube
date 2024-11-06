import React from 'react';

interface ArticleBlockProps {
  title: string;
  onClick?: () => void; 
}

const ArticleBlock: React.FC<ArticleBlockProps> = ({ title, onClick }) => {
  return (

    <div onClick={onClick} className="flex space-x-4 p-2 rounded hover:bg-[#292929] transition duration-200">
      <div className="flex flex-col">
        <h3 className="text-sm  text-white select-none">{title}</h3>
      </div>
    </div>

  );
};

export default ArticleBlock;