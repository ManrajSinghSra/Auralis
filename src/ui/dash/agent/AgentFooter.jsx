import { Button } from '@/components/ui/button';
import { PAGE_SIZE } from '@/const';
import Link from 'next/link';
import React from 'react';

const AgentFooter = ({ currPage ,totalCount}) => {
  
  const current = Number(currPage) || 1;

  const prevPage = current > 1 ? current - 1 : 1;  
  const totalPage=Math.ceil(totalCount/PAGE_SIZE)
  const nextPage = current===totalPage? current: current + 1; 

  return (
    <div className="flex justify-between mx-10 my-10">
      
      <div className="text-gray-600">
        Page {current} of {totalPage}
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          asChild
          disabled={current===1}
        >
          <Link href={`?page=${prevPage}`}>Previous</Link>
        </Button>

        <Button
          variant="outline"
          asChild
          disabled={current==totalPage}
        >
          <Link href={`?page=${nextPage}`}>Next</Link>
        </Button>
      </div>
    </div>
  );
};

export default AgentFooter;
