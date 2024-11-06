"use client";

import React, { useEffect, useState } from 'react';
import ArticleBlock from './ArticleBlock';
import { articleDataAtom } from '../dataStore';
import { useAtom } from 'jotai';

const ArticleRecommendations: React.FC = () => {
    const [globalArticleChain, setGlobalArticleChain] = useAtom(articleDataAtom)
    
    return (
        <div className="w-full h-full">
            <div className="space-y-5">
                {globalArticleChain.map((article) => (
                    <ArticleBlock 
                        key={article.title}
                        title={article.title}
                    />
                ))}
            </div>
        </div>
    );
  };
  
export default ArticleRecommendations;