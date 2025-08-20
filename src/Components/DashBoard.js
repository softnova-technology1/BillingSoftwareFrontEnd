import React from "react";
import { Card, CardContent, Typography, Box, Avatar, Grid, Button } from "@mui/material";
import '../Styles/DashBoard.module.css'
// ✅ Import images
import DashBoard1 from "../Images/DashBoard/dashboardicon1.png";
import DashBoard2 from "../Images/DashBoard/dashboardicon2.png";
import DashBoard3 from "../Images/DashBoard/dashboardicon3.png";
import infocard from "../Images/DashBoard/info-card.png";
import infocard2 from "../Images/DashBoard/infocard2.png";
import ReactApexChart from "react-apexcharts";


function DashBoard() {
    const stats = [
        {
            title: "Today's Money",
            amount: "$53,000",
            change: "+55%",
            changeColor: "green",
            imgicon: DashBoard1,
            // iconBg: "linear-gradient(45deg, #ec4899, #8b5cf6)",
        },
        {
            title: "New Users",
            amount: "2,350",
            change: "+12%",
            changeColor: "green",
            imgicon: DashBoard2,
            iconBg: "linear-gradient(45deg, #3b82f6, #06b6d4)",
        },
        {
            title: "Orders",
            amount: "1,200",
            change: "-8%",
            changeColor: "red",
            imgicon: DashBoard3,
            iconBg: "linear-gradient(45deg, #f97316, #facc15)",
        },
    ];

    const [chart1, setchart1] = React.useState({

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });


    const [chart2, setchart2] = React.useState({
        series: [
            {
                data: [
                    { x: "2008", y: [2800, 4500] },
                    { x: "2009", y: [3200, 4100] },
                    { x: "2010", y: [2950, 7800] },
                    { x: "2011", y: [3000, 4600] },
                    { x: "2012", y: [3500, 4100] },
                    { x: "2013", y: [4500, 6500] },
                    { x: "2014", y: [4100, 5600] }
                ]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: "rangeBar",
                zoom: { enabled: false }
            },
            plotOptions: {
                bar: {
                    isDumbbell: true,
                    columnWidth: 3,
                    dumbbellColors: [["#008FFB", "#00E396"]]
                }
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: "top",
                horizontalAlign: "left",
                customLegendItems: ["Product A", "Product B"]
            },
            fill: {
                type: "gradient",
                gradient: {
                    type: "vertical",
                    gradientToColors: ["#00E396"],
                    inverseColors: true,
                    stops: [0, 100]
                }
            },
            grid: {
                xaxis: { lines: { show: true } },
                yaxis: { lines: { show: false } }
            },
            xaxis: {
                tickPlacement: "on"
            }
        }
    });


    return (
        <>

            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                gap={2}
                p={2}
            >
                {stats.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            borderRadius: 3,
                            boxShadow: 3,
                            transition: "0.3s",
                            // "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography variant="body2" color="text.secondary" sx={{
                                    fontSize: '1.4rem'
                                }}>
                                    {item.title}
                                </Typography>
                                <div style={{
                                    display: 'flex',
                                }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{
                                        fontSize: '3rem'
                                    }}>
                                        {item.amount}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            padding: '15px 0px 0px 15px',
                                            fontSize: '1.5rem'
                                        }}
                                        variant="body2" fontWeight="bold" color={item.changeColor}>
                                        {item.change}
                                    </Typography>
                                </div>
                            </Box>
                            <img
                                src={item.imgicon}
                                alt="icon"
                                style={{ width: "10%", height: "60%", paddingTop: '20px' }}
                            />
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Grid container spacing={2} p={2} alignItems="stretch">
                <Grid size={{ xs: 12, md: 7, sm: 12 }}>
                    <Card
                        sx={{
                            borderRadius: 3,
                            boxShadow: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            p: 5,
                            height: "80%",   // 👈 makes card fill full height
                        }}
                    >
                        <Box sx={{ padding: "10px" }}>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ fontSize: "1.5rem" }}
                            >
                                Built by developers
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ fontSize: "3rem" }}
                            >
                                Soft UI Dashboard
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2, fontSize: "2rem" }}
                            >
                                From colors, cards, typography to complex elements, you will
                                find the full documentation.
                            </Typography>
                            <Button
                                variant="text"
                                sx={{ textTransform: "none", fontSize: "2.5rem" }}
                            >
                                Read More →
                            </Button>
                        </Box>
                        <Box sx={{ maxWidth: 250 }}>
                            <img src={infocard} alt="rocket" width="100%" />
                        </Box>
                    </Card>
                </Grid>

                <Grid
                    size={{ xs: 12, md: 4, sm: 12 }}
                    container
                    spacing={2}
                    alignItems="center"
                    sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        // p: 2,
                        backgroundImage: `url(${infocard2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white",
                        overflow: "auto",
                        height: "80%",   // 👈 match height
                    }}
                >
                    <Grid item xs={12}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{ fontSize: "1.5rem", paddingBottom: '10px' }}
                            >
                                Work with the rockets
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ mb: 1, fontSize: "2.2rem" }}
                            >
                                Wealth creation is an evolutionarily recent positive-sum game.
                                It is all about who take the opportunity first.
                            </Typography>

                            <Button
                                variant="text"
                                sx={{
                                    fontSize: "2.5rem",
                                    marginTop: "10px",
                                    textTransform: "none",
                                    color: "white",
                                }}
                            >
                                Read More →
                            </Button>
                        </CardContent>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container spacing={2}>
                <Grid size={4}>
                    <div id="chart">
                        <ReactApexChart
                            options={chart2.options}
                            series={chart2.series}
                            type="rangeBar"
                            height={350}
                            style={{
                                width: '100%'
                            }}
                        />
                    </div>

                </Grid>
                <Grid size={8}>

                    <div>
                        <div id="chart">
                            <ReactApexChart
                                options={chart1.options}
                                series={chart1.series}
                                type="area"
                                height={350}
                                style={{
                                    width: '100%'
                                }}
                            />
                        </div>
                        <div id="html-dist"></div>
                    </div>

                </Grid>
            </Grid>


        </>
    );
}

export default DashBoard;
