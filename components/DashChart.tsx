'use client';

import { Status } from '@prisma/client';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface dataElements {
	name: Status;
	total: number;
}

interface dataProps {
	data: dataElements[];
}

const DashChart = ({ data }: dataProps) => {
	return (
		<Card className='col-span-4'>
			<CardHeader>
				<CardTitle></CardTitle>
			</CardHeader>
			<CardContent className='pl-2'>
				<ResponsiveContainer width='100%' height={350}>
					<BarChart data={data}>
						<XAxis
							dataKey='name'
							stroke='#888888'
							fontSize={12}
							tickLine={false}
							axisLine={false}
						/>
						<YAxis stroke='#888888' fontSize={12} tickLine={false} axisLine={false} />
						<Bar dataKey='total' fill='#f0f0f0' radius={[4, 4, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default DashChart;
