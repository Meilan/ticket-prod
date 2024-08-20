import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const statuses: { label: string; value?: string }[] = [
  {label: "Open/Started", value:},
  {label: "Open", value: "OPEN"},
  {label: "Started", value: "STARTED"},
  {label: "Closed", value: "CLOSED"}
];

const StatusFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  
  <Select defaultValue={searchParams.get("status") || ""} onValueChange={(status) => {
    const params=new URLSearchParams();
    
    if(status) params.append("status", status)
  }}>
  </Select>
	return <div>StatusFilter</div>;
};

export default StatusFilter;
