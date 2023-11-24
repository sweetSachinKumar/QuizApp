import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { loadAdminStats } from '../../redux/action';
import Card from './Card';





const BarchartAdmin = () => {

    console.log("admin")
    const dispatch = useDispatch();
    const [userGraphs1, setUserGraphs1] = useState([])
    const [userGraphs2, setUserGraphs2] = useState([])
    const [userGraphs3, setUserGraphs3] = useState([])


    const [userCard1, setUserCard1] = useState([])
    const [userCard2, setUserCard2] = useState([])

    const { adminStats } = useSelector((state) => state.data);


    useEffect(() => {
        dispatch(loadAdminStats());
    }, [])

    useEffect(() => {
        if (adminStats && adminStats?.graphs) {
            setUserGraphs1(adminStats?.graphs.length > 0 ? adminStats?.graphs[0].data : [])
            setUserGraphs2(adminStats?.graphs.length > 0 ? adminStats?.graphs[1].data : [])
            setUserGraphs3(adminStats?.graphs.length > 0 ? adminStats?.graphs[2].data : [])

        }

        if (adminStats && adminStats?.cards) {
            setUserCard1(adminStats?.cards.length > 0 ? adminStats?.cards : [])
            // setUserCard2(adminStats?.cards.length > 0 ? adminStats?.cards[1].data : [])
        }
        console.log("adminStats", adminStats)

    }, [adminStats])


    return (
        <div className='container max-w-[1200px]  overflow-auto sm:overflow-x-hidden pe-4'>
            {/* <div style={{display:"grid", gridTemplateRows:"1fr 1fr",gridTemplateColumns:"1fr 1fr",gap:"20px"}} className="h-full w-full overflow-y-scroll"> */}
            <h1 className='font-bold text-xl p-8'>Quiz Insights</h1>



            <div  className=' flex-wrap gap-[66px] flex flex-col sm:hidden '>

                <div>
                    <BarChart width={300} height={130}  data={userGraphs1}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 10,
                            bottom: 5
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#bb86fc" />
                    </BarChart>
                    <h1 style={{ fontWeight: 'bold', fontSize: "15px", textAlign: "center" }}>Pass percentage Vs Quiz</h1>
                </div>
                <div>
                    <BarChart width={300} height={130}  data={userGraphs2}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#bb86fc" />
                    </BarChart>
                    <h1 style={{ fontWeight: 'bold', fontSize: "15px", textAlign: "center" }}>Avg no.of attemps Vs Quiz</h1>
                </div>
                <div>
                    <BarChart width={300} height={130}  data={userGraphs3}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#bb86fc" />
                    </BarChart>
                    <h1 style={{ fontWeight: 'bold', fontSize: "15px", textAlign: "center" }}>No.of students Qulified Vs Quiz</h1>
                </div>


            </div>

            <div className='sm:flex hidden flex-wrap gap-[66px] sm:gap-[88px] items-center justify-center xl:gap-0'>

                <div>
                    <BarChart width={400} height={300} data={userGraphs1}
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
                        <Bar dataKey="value" fill="#bb86fc" />
                    </BarChart>
                    <h1 style={{ fontWeight: 'bold', fontSize: "15px", textAlign: "center" }}>Pass percentage Vs Quiz</h1>
                </div>
                <div>
                    <BarChart width={400} height={300} data={userGraphs2}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#bb86fc" />
                    </BarChart>
                    <h1 style={{ fontWeight: 'bold', fontSize: "15px", textAlign: "center" }}>Avg no.of attemps Vs Quiz</h1>
                </div>
                <div>
                    <BarChart width={400} height={300} data={userGraphs3}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#bb86fc" />
                    </BarChart>
                    <h1 style={{ fontWeight: 'bold', fontSize: "15px", textAlign: "center" }}>No.of students Qulified Vs Quiz</h1>
                </div>


            </div>


            <div className='sm:p-8 p-3 mt-16 md:mt-24 '>
                <h1  className='text-xl mb-4 font-bold'>Quiz OverView</h1>


                <div className='flex items-center justify-center flex-wrap gap-[20px] sm:gap-0 p-1 sm:p-5'>
                    {userCard1.map((card, index) => (
                        <Card key={index} data={card} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BarchartAdmin;