import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { loadUserStats } from '../../redux/action';
import Card from './Card';
import { useRef } from 'react';





const BarchartUser = () => {

    const dispatch = useDispatch();
    const [userGraphs1, setUserGraphs1] = useState([])
    const [userGraphs2, setUserGraphs2] = useState([])

    const [userCard1, setUserCard1] = useState([])
    const [userCard2, setUserCard2] = useState([])

    const { userStats } = useSelector((state) => state.data);
  const widthwin = window.innerWidth
    useEffect(() => {
        dispatch(loadUserStats());
    }, [])

    useEffect(() => {
        if (userStats && userStats?.graphs) {
            setUserGraphs1(userStats?.graphs.length > 0 ? userStats?.graphs[0].data : [])
            setUserGraphs2(userStats?.graphs.length > 0 ? userStats?.graphs[1].data : [])
        }

        if (userStats && userStats?.cards) {
            setUserCard1(userStats?.cards.length > 0 ? userStats?.cards : [])
            // setUserCard2(userStats?.cards.length > 0 ? userStats?.cards[1].data : [])
        }


    }, [userStats])


    return (
        <div className='container max-w-[1200px]  overflow-auto sm:overflow-x-hidden'>
            {/* <h1 style={{ fontWeight: 'bold', fontSize: "20px", padding: "30px" }}>Quiz Insights</h1> */}
            <h1 className='font-bold text-xl p-8'>Quiz Insights</h1>
            <div className=' flex-wrap gap-[66px] flex flex-col sm:hidden ' >
                <div className='max-h-[300px] max-w-[500px]'>
                    <BarChart className='sm:text-base text-xs' width={300} height={130}  data={userGraphs1}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#9333eaf2" />
                    </BarChart>
                    <h1 className='text-base   font-bold text-center  text-gray-800/90'>Percentage of marks scored Vs Quiz</h1>

                </div>

                <div>
                    <BarChart  width={300} height={130} data={userGraphs2}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#9333eaf2" />
                    </BarChart>
                    <h1 className='text-base  text-gray-800/90  font-bold text-center' >No.of attemps to qualify Vs Quiz</h1>

                </div>
            </div>

            <div className='sm:flex hidden flex-wrap gap-[66px] sm:gap-[88px] items-center justify-center lg:gap-0' >
                <div className='max-h-[300px] max-w-[500px]'>
                    <BarChart className='border w-full h-full md:w-[500px] md:h-[300px]' width={470} height={300}  data={userGraphs1}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#9333eaf2" />
                    </BarChart>
                    <h1 className='text-base  text-gray-800/90  font-bold text-center'>Percentage of marks scored Vs Quiz</h1>

                </div>

                <div>
                    <BarChart  width={470} height={300} data={userGraphs2}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#9333eaf2" />
                    </BarChart>
                    <h1 className='text-base  text-gray-800/90  font-bold text-center'>No.of attemps to qualify Vs Quiz</h1>

                </div>
            </div>

            <div className='sm:p-8 p-3 mt-16 md:mt-24 ' >
                <h1 className='text-xl mb-4 font-bold' >Quiz OverView</h1>


                <div className='flex items-center justify-center flex-wrap gap-[20px] sm:gap-0 p-1 sm:p-5'>
                    {userCard1.map((card, index) => (
                        <Card key={index} data={card} />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default BarchartUser;