"use client";

import React, { useEffect, useState } from 'react';
import ArticleBlock from './ArticleBlock';
import { articleDataAtom } from '../dataStore';
import { useAtom } from 'jotai';

interface Article {
    title: string;
}

const ArticleRecommendations: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [globalArticleChain, setglobalArticleChain] = useAtom(articleDataAtom)
    const [currentTitle, setCurrentTitle] = useState<string>('One Piece'); 


    const fetchRelatedArticles = async () => {
        const response = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=morelike:${currentTitle}&srlimit=50&format=json&origin=*`
        );
        const data = await response.json();

        // Extract titles from the top search results
        // .filter((_: any, index: number) => index % 5 === 0) get every nth article
        const newArticles = data.query.search.map((item: any) => ({
            title: item.title,
        }));

        setArticles(newArticles);
    };

    useEffect(() => {
        fetchRelatedArticles();
    }, [currentTitle]);

    const addArticle = (article: Article) => { 
        console.log("added article: ", article.title)
        setglobalArticleChain((prevChain) => [...prevChain, article]);
        setCurrentTitle(article.title); 
    }

    return (
        <div className="w-full h-full">
            <div className="space-y-5">
                {articles.map((article, index) => (
                    <ArticleBlock 
                        key={index}
                        title={article.title}
                        onClick={() => addArticle(article)} // Add article on click
                    />
                ))}
            </div>
        </div>
    );
  };
  
export default ArticleRecommendations;