/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1106.0, "minX": 0.0, "maxY": 12228.0, "series": [{"data": [[0.0, 1106.0], [0.1, 1135.0], [0.2, 1138.0], [0.3, 1142.0], [0.4, 1152.0], [0.5, 1169.0], [0.6, 1178.0], [0.7, 1188.0], [0.8, 1197.0], [0.9, 1203.0], [1.0, 1222.0], [1.1, 1237.0], [1.2, 1252.0], [1.3, 1264.0], [1.4, 1275.0], [1.5, 1277.0], [1.6, 1283.0], [1.7, 1293.0], [1.8, 1303.0], [1.9, 1316.0], [2.0, 1326.0], [2.1, 1341.0], [2.2, 1342.0], [2.3, 1344.0], [2.4, 1347.0], [2.5, 1354.0], [2.6, 1362.0], [2.7, 1373.0], [2.8, 1377.0], [2.9, 1386.0], [3.0, 1391.0], [3.1, 1394.0], [3.2, 1398.0], [3.3, 1403.0], [3.4, 1413.0], [3.5, 1421.0], [3.6, 1427.0], [3.7, 1434.0], [3.8, 1438.0], [3.9, 1441.0], [4.0, 1444.0], [4.1, 1448.0], [4.2, 1453.0], [4.3, 1457.0], [4.4, 1465.0], [4.5, 1469.0], [4.6, 1475.0], [4.7, 1483.0], [4.8, 1492.0], [4.9, 1504.0], [5.0, 1514.0], [5.1, 1520.0], [5.2, 1531.0], [5.3, 1548.0], [5.4, 1554.0], [5.5, 1565.0], [5.6, 1570.0], [5.7, 1583.0], [5.8, 1589.0], [5.9, 1593.0], [6.0, 1604.0], [6.1, 1610.0], [6.2, 1619.0], [6.3, 1625.0], [6.4, 1632.0], [6.5, 1642.0], [6.6, 1651.0], [6.7, 1656.0], [6.8, 1671.0], [6.9, 1685.0], [7.0, 1691.0], [7.1, 1702.0], [7.2, 1708.0], [7.3, 1714.0], [7.4, 1727.0], [7.5, 1733.0], [7.6, 1741.0], [7.7, 1754.0], [7.8, 1763.0], [7.9, 1774.0], [8.0, 1784.0], [8.1, 1785.0], [8.2, 1795.0], [8.3, 1806.0], [8.4, 1822.0], [8.5, 1836.0], [8.6, 1845.0], [8.7, 1856.0], [8.8, 1862.0], [8.9, 1884.0], [9.0, 1891.0], [9.1, 1897.0], [9.2, 1909.0], [9.3, 1923.0], [9.4, 1927.0], [9.5, 1935.0], [9.6, 1944.0], [9.7, 1948.0], [9.8, 1960.0], [9.9, 1972.0], [10.0, 1982.0], [10.1, 1998.0], [10.2, 2006.0], [10.3, 2013.0], [10.4, 2018.0], [10.5, 2028.0], [10.6, 2039.0], [10.7, 2057.0], [10.8, 2063.0], [10.9, 2074.0], [11.0, 2084.0], [11.1, 2093.0], [11.2, 2098.0], [11.3, 2101.0], [11.4, 2108.0], [11.5, 2120.0], [11.6, 2123.0], [11.7, 2130.0], [11.8, 2139.0], [11.9, 2146.0], [12.0, 2152.0], [12.1, 2158.0], [12.2, 2169.0], [12.3, 2175.0], [12.4, 2177.0], [12.5, 2183.0], [12.6, 2191.0], [12.7, 2200.0], [12.8, 2203.0], [12.9, 2208.0], [13.0, 2213.0], [13.1, 2218.0], [13.2, 2226.0], [13.3, 2229.0], [13.4, 2233.0], [13.5, 2238.0], [13.6, 2248.0], [13.7, 2255.0], [13.8, 2259.0], [13.9, 2265.0], [14.0, 2269.0], [14.1, 2273.0], [14.2, 2278.0], [14.3, 2282.0], [14.4, 2285.0], [14.5, 2290.0], [14.6, 2294.0], [14.7, 2300.0], [14.8, 2304.0], [14.9, 2317.0], [15.0, 2322.0], [15.1, 2327.0], [15.2, 2338.0], [15.3, 2343.0], [15.4, 2357.0], [15.5, 2369.0], [15.6, 2374.0], [15.7, 2377.0], [15.8, 2381.0], [15.9, 2388.0], [16.0, 2393.0], [16.1, 2399.0], [16.2, 2408.0], [16.3, 2417.0], [16.4, 2423.0], [16.5, 2431.0], [16.6, 2439.0], [16.7, 2447.0], [16.8, 2454.0], [16.9, 2464.0], [17.0, 2470.0], [17.1, 2477.0], [17.2, 2481.0], [17.3, 2488.0], [17.4, 2494.0], [17.5, 2496.0], [17.6, 2498.0], [17.7, 2508.0], [17.8, 2516.0], [17.9, 2517.0], [18.0, 2525.0], [18.1, 2530.0], [18.2, 2533.0], [18.3, 2541.0], [18.4, 2548.0], [18.5, 2553.0], [18.6, 2555.0], [18.7, 2557.0], [18.8, 2560.0], [18.9, 2562.0], [19.0, 2565.0], [19.1, 2571.0], [19.2, 2575.0], [19.3, 2578.0], [19.4, 2583.0], [19.5, 2586.0], [19.6, 2590.0], [19.7, 2594.0], [19.8, 2600.0], [19.9, 2604.0], [20.0, 2613.0], [20.1, 2618.0], [20.2, 2621.0], [20.3, 2630.0], [20.4, 2634.0], [20.5, 2642.0], [20.6, 2644.0], [20.7, 2649.0], [20.8, 2654.0], [20.9, 2657.0], [21.0, 2661.0], [21.1, 2666.0], [21.2, 2671.0], [21.3, 2675.0], [21.4, 2681.0], [21.5, 2686.0], [21.6, 2693.0], [21.7, 2698.0], [21.8, 2700.0], [21.9, 2702.0], [22.0, 2708.0], [22.1, 2712.0], [22.2, 2715.0], [22.3, 2719.0], [22.4, 2723.0], [22.5, 2728.0], [22.6, 2735.0], [22.7, 2740.0], [22.8, 2742.0], [22.9, 2745.0], [23.0, 2756.0], [23.1, 2769.0], [23.2, 2774.0], [23.3, 2779.0], [23.4, 2783.0], [23.5, 2790.0], [23.6, 2794.0], [23.7, 2798.0], [23.8, 2802.0], [23.9, 2807.0], [24.0, 2811.0], [24.1, 2817.0], [24.2, 2820.0], [24.3, 2824.0], [24.4, 2827.0], [24.5, 2831.0], [24.6, 2839.0], [24.7, 2845.0], [24.8, 2853.0], [24.9, 2856.0], [25.0, 2861.0], [25.1, 2863.0], [25.2, 2869.0], [25.3, 2874.0], [25.4, 2877.0], [25.5, 2883.0], [25.6, 2888.0], [25.7, 2899.0], [25.8, 2901.0], [25.9, 2904.0], [26.0, 2905.0], [26.1, 2910.0], [26.2, 2914.0], [26.3, 2916.0], [26.4, 2919.0], [26.5, 2921.0], [26.6, 2924.0], [26.7, 2929.0], [26.8, 2937.0], [26.9, 2940.0], [27.0, 2942.0], [27.1, 2946.0], [27.2, 2949.0], [27.3, 2953.0], [27.4, 2955.0], [27.5, 2956.0], [27.6, 2959.0], [27.7, 2962.0], [27.8, 2966.0], [27.9, 2968.0], [28.0, 2973.0], [28.1, 2981.0], [28.2, 2986.0], [28.3, 2989.0], [28.4, 2992.0], [28.5, 2994.0], [28.6, 2998.0], [28.7, 3002.0], [28.8, 3006.0], [28.9, 3009.0], [29.0, 3013.0], [29.1, 3018.0], [29.2, 3019.0], [29.3, 3021.0], [29.4, 3022.0], [29.5, 3030.0], [29.6, 3034.0], [29.7, 3036.0], [29.8, 3038.0], [29.9, 3043.0], [30.0, 3045.0], [30.1, 3048.0], [30.2, 3053.0], [30.3, 3056.0], [30.4, 3062.0], [30.5, 3064.0], [30.6, 3066.0], [30.7, 3075.0], [30.8, 3079.0], [30.9, 3086.0], [31.0, 3092.0], [31.1, 3095.0], [31.2, 3097.0], [31.3, 3102.0], [31.4, 3105.0], [31.5, 3112.0], [31.6, 3117.0], [31.7, 3122.0], [31.8, 3126.0], [31.9, 3130.0], [32.0, 3136.0], [32.1, 3138.0], [32.2, 3144.0], [32.3, 3146.0], [32.4, 3151.0], [32.5, 3156.0], [32.6, 3160.0], [32.7, 3165.0], [32.8, 3167.0], [32.9, 3171.0], [33.0, 3173.0], [33.1, 3176.0], [33.2, 3182.0], [33.3, 3186.0], [33.4, 3188.0], [33.5, 3195.0], [33.6, 3199.0], [33.7, 3204.0], [33.8, 3208.0], [33.9, 3209.0], [34.0, 3214.0], [34.1, 3219.0], [34.2, 3224.0], [34.3, 3227.0], [34.4, 3231.0], [34.5, 3238.0], [34.6, 3244.0], [34.7, 3246.0], [34.8, 3250.0], [34.9, 3256.0], [35.0, 3258.0], [35.1, 3262.0], [35.2, 3268.0], [35.3, 3271.0], [35.4, 3273.0], [35.5, 3274.0], [35.6, 3278.0], [35.7, 3285.0], [35.8, 3288.0], [35.9, 3295.0], [36.0, 3296.0], [36.1, 3299.0], [36.2, 3305.0], [36.3, 3308.0], [36.4, 3310.0], [36.5, 3316.0], [36.6, 3318.0], [36.7, 3321.0], [36.8, 3323.0], [36.9, 3328.0], [37.0, 3333.0], [37.1, 3335.0], [37.2, 3341.0], [37.3, 3343.0], [37.4, 3349.0], [37.5, 3352.0], [37.6, 3356.0], [37.7, 3359.0], [37.8, 3363.0], [37.9, 3368.0], [38.0, 3371.0], [38.1, 3372.0], [38.2, 3374.0], [38.3, 3379.0], [38.4, 3381.0], [38.5, 3385.0], [38.6, 3387.0], [38.7, 3393.0], [38.8, 3399.0], [38.9, 3403.0], [39.0, 3409.0], [39.1, 3413.0], [39.2, 3414.0], [39.3, 3418.0], [39.4, 3421.0], [39.5, 3424.0], [39.6, 3429.0], [39.7, 3432.0], [39.8, 3436.0], [39.9, 3444.0], [40.0, 3445.0], [40.1, 3447.0], [40.2, 3450.0], [40.3, 3452.0], [40.4, 3455.0], [40.5, 3456.0], [40.6, 3457.0], [40.7, 3463.0], [40.8, 3467.0], [40.9, 3472.0], [41.0, 3474.0], [41.1, 3477.0], [41.2, 3480.0], [41.3, 3483.0], [41.4, 3489.0], [41.5, 3500.0], [41.6, 3503.0], [41.7, 3507.0], [41.8, 3510.0], [41.9, 3513.0], [42.0, 3515.0], [42.1, 3517.0], [42.2, 3524.0], [42.3, 3533.0], [42.4, 3536.0], [42.5, 3542.0], [42.6, 3549.0], [42.7, 3551.0], [42.8, 3556.0], [42.9, 3560.0], [43.0, 3564.0], [43.1, 3572.0], [43.2, 3575.0], [43.3, 3577.0], [43.4, 3580.0], [43.5, 3584.0], [43.6, 3588.0], [43.7, 3590.0], [43.8, 3593.0], [43.9, 3600.0], [44.0, 3604.0], [44.1, 3606.0], [44.2, 3609.0], [44.3, 3613.0], [44.4, 3617.0], [44.5, 3621.0], [44.6, 3624.0], [44.7, 3628.0], [44.8, 3632.0], [44.9, 3637.0], [45.0, 3641.0], [45.1, 3643.0], [45.2, 3647.0], [45.3, 3648.0], [45.4, 3652.0], [45.5, 3653.0], [45.6, 3658.0], [45.7, 3661.0], [45.8, 3663.0], [45.9, 3666.0], [46.0, 3667.0], [46.1, 3670.0], [46.2, 3673.0], [46.3, 3674.0], [46.4, 3677.0], [46.5, 3681.0], [46.6, 3686.0], [46.7, 3690.0], [46.8, 3699.0], [46.9, 3703.0], [47.0, 3708.0], [47.1, 3712.0], [47.2, 3717.0], [47.3, 3720.0], [47.4, 3721.0], [47.5, 3727.0], [47.6, 3732.0], [47.7, 3738.0], [47.8, 3743.0], [47.9, 3748.0], [48.0, 3751.0], [48.1, 3757.0], [48.2, 3762.0], [48.3, 3767.0], [48.4, 3774.0], [48.5, 3778.0], [48.6, 3781.0], [48.7, 3785.0], [48.8, 3790.0], [48.9, 3790.0], [49.0, 3792.0], [49.1, 3795.0], [49.2, 3802.0], [49.3, 3804.0], [49.4, 3810.0], [49.5, 3815.0], [49.6, 3819.0], [49.7, 3823.0], [49.8, 3828.0], [49.9, 3829.0], [50.0, 3833.0], [50.1, 3839.0], [50.2, 3846.0], [50.3, 3853.0], [50.4, 3858.0], [50.5, 3862.0], [50.6, 3866.0], [50.7, 3874.0], [50.8, 3878.0], [50.9, 3881.0], [51.0, 3884.0], [51.1, 3889.0], [51.2, 3898.0], [51.3, 3903.0], [51.4, 3910.0], [51.5, 3913.0], [51.6, 3920.0], [51.7, 3924.0], [51.8, 3926.0], [51.9, 3929.0], [52.0, 3935.0], [52.1, 3937.0], [52.2, 3940.0], [52.3, 3943.0], [52.4, 3949.0], [52.5, 3952.0], [52.6, 3957.0], [52.7, 3961.0], [52.8, 3967.0], [52.9, 3974.0], [53.0, 3979.0], [53.1, 3984.0], [53.2, 3985.0], [53.3, 3989.0], [53.4, 3991.0], [53.5, 3997.0], [53.6, 4000.0], [53.7, 4006.0], [53.8, 4011.0], [53.9, 4014.0], [54.0, 4021.0], [54.1, 4026.0], [54.2, 4028.0], [54.3, 4032.0], [54.4, 4034.0], [54.5, 4038.0], [54.6, 4042.0], [54.7, 4046.0], [54.8, 4051.0], [54.9, 4055.0], [55.0, 4060.0], [55.1, 4064.0], [55.2, 4070.0], [55.3, 4076.0], [55.4, 4078.0], [55.5, 4082.0], [55.6, 4088.0], [55.7, 4093.0], [55.8, 4094.0], [55.9, 4096.0], [56.0, 4099.0], [56.1, 4105.0], [56.2, 4108.0], [56.3, 4112.0], [56.4, 4118.0], [56.5, 4125.0], [56.6, 4129.0], [56.7, 4134.0], [56.8, 4137.0], [56.9, 4142.0], [57.0, 4149.0], [57.1, 4152.0], [57.2, 4155.0], [57.3, 4163.0], [57.4, 4174.0], [57.5, 4178.0], [57.6, 4183.0], [57.7, 4190.0], [57.8, 4193.0], [57.9, 4197.0], [58.0, 4202.0], [58.1, 4204.0], [58.2, 4209.0], [58.3, 4212.0], [58.4, 4216.0], [58.5, 4217.0], [58.6, 4224.0], [58.7, 4229.0], [58.8, 4234.0], [58.9, 4237.0], [59.0, 4249.0], [59.1, 4250.0], [59.2, 4261.0], [59.3, 4263.0], [59.4, 4266.0], [59.5, 4273.0], [59.6, 4279.0], [59.7, 4283.0], [59.8, 4288.0], [59.9, 4292.0], [60.0, 4293.0], [60.1, 4295.0], [60.2, 4301.0], [60.3, 4306.0], [60.4, 4308.0], [60.5, 4312.0], [60.6, 4318.0], [60.7, 4321.0], [60.8, 4329.0], [60.9, 4331.0], [61.0, 4334.0], [61.1, 4339.0], [61.2, 4343.0], [61.3, 4348.0], [61.4, 4354.0], [61.5, 4357.0], [61.6, 4361.0], [61.7, 4362.0], [61.8, 4366.0], [61.9, 4371.0], [62.0, 4373.0], [62.1, 4377.0], [62.2, 4380.0], [62.3, 4383.0], [62.4, 4385.0], [62.5, 4392.0], [62.6, 4395.0], [62.7, 4403.0], [62.8, 4405.0], [62.9, 4407.0], [63.0, 4414.0], [63.1, 4415.0], [63.2, 4419.0], [63.3, 4422.0], [63.4, 4428.0], [63.5, 4434.0], [63.6, 4440.0], [63.7, 4448.0], [63.8, 4451.0], [63.9, 4457.0], [64.0, 4460.0], [64.1, 4465.0], [64.2, 4471.0], [64.3, 4475.0], [64.4, 4478.0], [64.5, 4480.0], [64.6, 4487.0], [64.7, 4492.0], [64.8, 4498.0], [64.9, 4503.0], [65.0, 4506.0], [65.1, 4509.0], [65.2, 4512.0], [65.3, 4514.0], [65.4, 4516.0], [65.5, 4523.0], [65.6, 4526.0], [65.7, 4531.0], [65.8, 4537.0], [65.9, 4544.0], [66.0, 4550.0], [66.1, 4555.0], [66.2, 4560.0], [66.3, 4562.0], [66.4, 4567.0], [66.5, 4570.0], [66.6, 4576.0], [66.7, 4582.0], [66.8, 4586.0], [66.9, 4590.0], [67.0, 4594.0], [67.1, 4597.0], [67.2, 4606.0], [67.3, 4612.0], [67.4, 4617.0], [67.5, 4625.0], [67.6, 4630.0], [67.7, 4634.0], [67.8, 4636.0], [67.9, 4639.0], [68.0, 4643.0], [68.1, 4651.0], [68.2, 4658.0], [68.3, 4664.0], [68.4, 4667.0], [68.5, 4673.0], [68.6, 4680.0], [68.7, 4685.0], [68.8, 4689.0], [68.9, 4692.0], [69.0, 4696.0], [69.1, 4703.0], [69.2, 4713.0], [69.3, 4719.0], [69.4, 4725.0], [69.5, 4733.0], [69.6, 4742.0], [69.7, 4747.0], [69.8, 4749.0], [69.9, 4752.0], [70.0, 4756.0], [70.1, 4760.0], [70.2, 4767.0], [70.3, 4772.0], [70.4, 4777.0], [70.5, 4783.0], [70.6, 4785.0], [70.7, 4790.0], [70.8, 4796.0], [70.9, 4801.0], [71.0, 4805.0], [71.1, 4811.0], [71.2, 4816.0], [71.3, 4819.0], [71.4, 4822.0], [71.5, 4829.0], [71.6, 4832.0], [71.7, 4835.0], [71.8, 4843.0], [71.9, 4848.0], [72.0, 4851.0], [72.1, 4856.0], [72.2, 4862.0], [72.3, 4869.0], [72.4, 4874.0], [72.5, 4886.0], [72.6, 4893.0], [72.7, 4899.0], [72.8, 4908.0], [72.9, 4914.0], [73.0, 4927.0], [73.1, 4932.0], [73.2, 4943.0], [73.3, 4949.0], [73.4, 4956.0], [73.5, 4961.0], [73.6, 4966.0], [73.7, 4969.0], [73.8, 4972.0], [73.9, 4980.0], [74.0, 4987.0], [74.1, 4995.0], [74.2, 4999.0], [74.3, 5001.0], [74.4, 5005.0], [74.5, 5009.0], [74.6, 5015.0], [74.7, 5020.0], [74.8, 5026.0], [74.9, 5033.0], [75.0, 5039.0], [75.1, 5043.0], [75.2, 5052.0], [75.3, 5065.0], [75.4, 5069.0], [75.5, 5077.0], [75.6, 5084.0], [75.7, 5090.0], [75.8, 5094.0], [75.9, 5099.0], [76.0, 5107.0], [76.1, 5111.0], [76.2, 5115.0], [76.3, 5116.0], [76.4, 5123.0], [76.5, 5128.0], [76.6, 5133.0], [76.7, 5138.0], [76.8, 5141.0], [76.9, 5144.0], [77.0, 5154.0], [77.1, 5162.0], [77.2, 5172.0], [77.3, 5176.0], [77.4, 5180.0], [77.5, 5187.0], [77.6, 5191.0], [77.7, 5200.0], [77.8, 5209.0], [77.9, 5214.0], [78.0, 5219.0], [78.1, 5232.0], [78.2, 5237.0], [78.3, 5241.0], [78.4, 5243.0], [78.5, 5248.0], [78.6, 5251.0], [78.7, 5257.0], [78.8, 5260.0], [78.9, 5269.0], [79.0, 5273.0], [79.1, 5277.0], [79.2, 5284.0], [79.3, 5289.0], [79.4, 5296.0], [79.5, 5303.0], [79.6, 5311.0], [79.7, 5316.0], [79.8, 5319.0], [79.9, 5322.0], [80.0, 5327.0], [80.1, 5333.0], [80.2, 5342.0], [80.3, 5349.0], [80.4, 5355.0], [80.5, 5364.0], [80.6, 5375.0], [80.7, 5383.0], [80.8, 5386.0], [80.9, 5390.0], [81.0, 5396.0], [81.1, 5402.0], [81.2, 5413.0], [81.3, 5419.0], [81.4, 5427.0], [81.5, 5433.0], [81.6, 5437.0], [81.7, 5447.0], [81.8, 5454.0], [81.9, 5460.0], [82.0, 5465.0], [82.1, 5469.0], [82.2, 5474.0], [82.3, 5481.0], [82.4, 5487.0], [82.5, 5491.0], [82.6, 5501.0], [82.7, 5510.0], [82.8, 5518.0], [82.9, 5535.0], [83.0, 5544.0], [83.1, 5549.0], [83.2, 5556.0], [83.3, 5562.0], [83.4, 5568.0], [83.5, 5574.0], [83.6, 5577.0], [83.7, 5588.0], [83.8, 5596.0], [83.9, 5606.0], [84.0, 5617.0], [84.1, 5624.0], [84.2, 5627.0], [84.3, 5637.0], [84.4, 5650.0], [84.5, 5652.0], [84.6, 5665.0], [84.7, 5668.0], [84.8, 5670.0], [84.9, 5684.0], [85.0, 5693.0], [85.1, 5704.0], [85.2, 5713.0], [85.3, 5721.0], [85.4, 5733.0], [85.5, 5748.0], [85.6, 5756.0], [85.7, 5758.0], [85.8, 5766.0], [85.9, 5781.0], [86.0, 5785.0], [86.1, 5791.0], [86.2, 5797.0], [86.3, 5804.0], [86.4, 5813.0], [86.5, 5820.0], [86.6, 5824.0], [86.7, 5830.0], [86.8, 5849.0], [86.9, 5854.0], [87.0, 5859.0], [87.1, 5865.0], [87.2, 5873.0], [87.3, 5890.0], [87.4, 5898.0], [87.5, 5914.0], [87.6, 5921.0], [87.7, 5936.0], [87.8, 5941.0], [87.9, 5947.0], [88.0, 5956.0], [88.1, 5962.0], [88.2, 5978.0], [88.3, 5988.0], [88.4, 5999.0], [88.5, 6014.0], [88.6, 6029.0], [88.7, 6036.0], [88.8, 6049.0], [88.9, 6052.0], [89.0, 6063.0], [89.1, 6075.0], [89.2, 6081.0], [89.3, 6096.0], [89.4, 6101.0], [89.5, 6115.0], [89.6, 6123.0], [89.7, 6137.0], [89.8, 6150.0], [89.9, 6158.0], [90.0, 6168.0], [90.1, 6179.0], [90.2, 6189.0], [90.3, 6197.0], [90.4, 6207.0], [90.5, 6215.0], [90.6, 6240.0], [90.7, 6260.0], [90.8, 6273.0], [90.9, 6290.0], [91.0, 6296.0], [91.1, 6316.0], [91.2, 6339.0], [91.3, 6349.0], [91.4, 6363.0], [91.5, 6375.0], [91.6, 6383.0], [91.7, 6403.0], [91.8, 6418.0], [91.9, 6430.0], [92.0, 6445.0], [92.1, 6458.0], [92.2, 6473.0], [92.3, 6482.0], [92.4, 6497.0], [92.5, 6509.0], [92.6, 6529.0], [92.7, 6533.0], [92.8, 6555.0], [92.9, 6564.0], [93.0, 6591.0], [93.1, 6601.0], [93.2, 6623.0], [93.3, 6641.0], [93.4, 6656.0], [93.5, 6664.0], [93.6, 6672.0], [93.7, 6679.0], [93.8, 6689.0], [93.9, 6703.0], [94.0, 6719.0], [94.1, 6730.0], [94.2, 6742.0], [94.3, 6766.0], [94.4, 6791.0], [94.5, 6799.0], [94.6, 6802.0], [94.7, 6820.0], [94.8, 6832.0], [94.9, 6841.0], [95.0, 6872.0], [95.1, 6885.0], [95.2, 6895.0], [95.3, 6919.0], [95.4, 6933.0], [95.5, 6960.0], [95.6, 7016.0], [95.7, 7034.0], [95.8, 7062.0], [95.9, 7105.0], [96.0, 7115.0], [96.1, 7139.0], [96.2, 7148.0], [96.3, 7165.0], [96.4, 7203.0], [96.5, 7234.0], [96.6, 7257.0], [96.7, 7354.0], [96.8, 7376.0], [96.9, 7389.0], [97.0, 7416.0], [97.1, 7449.0], [97.2, 7477.0], [97.3, 7501.0], [97.4, 7534.0], [97.5, 7580.0], [97.6, 7649.0], [97.7, 7680.0], [97.8, 7719.0], [97.9, 7761.0], [98.0, 7820.0], [98.1, 7882.0], [98.2, 7907.0], [98.3, 7990.0], [98.4, 8026.0], [98.5, 8132.0], [98.6, 8230.0], [98.7, 8285.0], [98.8, 8445.0], [98.9, 8547.0], [99.0, 8684.0], [99.1, 8858.0], [99.2, 9065.0], [99.3, 9253.0], [99.4, 9568.0], [99.5, 10062.0], [99.6, 10469.0], [99.7, 10860.0], [99.8, 11518.0], [99.9, 11688.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 153.0, "series": [{"data": [[1100.0, 43.0], [1200.0, 49.0], [1300.0, 76.0], [1400.0, 85.0], [1500.0, 58.0], [1600.0, 57.0], [1700.0, 58.0], [1800.0, 49.0], [1900.0, 50.0], [2000.0, 58.0], [2100.0, 75.0], [2300.0, 75.0], [2200.0, 103.0], [2400.0, 79.0], [2500.0, 112.0], [2600.0, 104.0], [2700.0, 101.0], [2800.0, 103.0], [2900.0, 153.0], [3000.0, 133.0], [3100.0, 124.0], [3300.0, 141.0], [3200.0, 129.0], [3400.0, 139.0], [3500.0, 124.0], [3600.0, 153.0], [3700.0, 120.0], [3800.0, 107.0], [3900.0, 123.0], [4000.0, 126.0], [4100.0, 102.0], [4200.0, 113.0], [4300.0, 131.0], [4400.0, 113.0], [4600.0, 97.0], [4500.0, 119.0], [4800.0, 96.0], [4700.0, 96.0], [4900.0, 79.0], [5000.0, 88.0], [5100.0, 92.0], [5200.0, 90.0], [5300.0, 84.0], [5600.0, 63.0], [5400.0, 80.0], [5500.0, 65.0], [5800.0, 61.0], [5700.0, 61.0], [6000.0, 48.0], [5900.0, 54.0], [6100.0, 50.0], [6300.0, 32.0], [6200.0, 37.0], [6500.0, 31.0], [6600.0, 44.0], [6400.0, 41.0], [6800.0, 35.0], [6700.0, 34.0], [6900.0, 19.0], [7000.0, 15.0], [7100.0, 27.0], [7300.0, 15.0], [7400.0, 18.0], [7200.0, 13.0], [7500.0, 13.0], [7600.0, 10.0], [7900.0, 7.0], [7700.0, 14.0], [7800.0, 9.0], [8100.0, 5.0], [8000.0, 10.0], [8500.0, 7.0], [8400.0, 6.0], [8600.0, 2.0], [8200.0, 6.0], [8700.0, 3.0], [8300.0, 1.0], [8800.0, 2.0], [9000.0, 7.0], [8900.0, 1.0], [9200.0, 2.0], [9100.0, 1.0], [9300.0, 1.0], [9400.0, 2.0], [9700.0, 2.0], [9500.0, 1.0], [9600.0, 2.0], [10100.0, 3.0], [9800.0, 1.0], [10000.0, 1.0], [10400.0, 2.0], [10500.0, 3.0], [11000.0, 2.0], [10800.0, 3.0], [11600.0, 4.0], [11500.0, 2.0], [11300.0, 1.0], [11800.0, 2.0], [12200.0, 1.0], [12000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4936.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 254.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4936.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 38.41463414634146, "minX": 1.60190106E12, "maxY": 40.0, "series": [{"data": [[1.60190154E12, 38.41463414634146], [1.60190136E12, 40.0], [1.60190142E12, 40.0], [1.60190106E12, 40.0], [1.60190124E12, 40.0], [1.6019013E12, 40.0], [1.60190112E12, 40.0], [1.60190118E12, 40.0], [1.60190148E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190154E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3168.0, "minX": 1.0, "maxY": 7164.0, "series": [{"data": [[33.0, 3885.0], [32.0, 4516.0], [2.0, 4999.0], [35.0, 6263.0], [34.0, 6725.0], [37.0, 6866.0], [36.0, 4098.0], [39.0, 4675.0], [38.0, 4405.0], [40.0, 4011.392857142858], [3.0, 5624.0], [4.0, 5611.0], [5.0, 5916.0], [6.0, 4405.0], [7.0, 5112.0], [8.0, 4357.0], [9.0, 4160.0], [10.0, 6181.0], [11.0, 5514.0], [12.0, 3673.0], [13.0, 5228.0], [14.0, 6410.0], [15.0, 4950.0], [16.0, 4107.0], [1.0, 5590.0], [17.0, 5853.0], [18.0, 5569.0], [19.0, 7164.0], [20.0, 4305.0], [21.0, 5172.0], [22.0, 4647.0], [23.0, 3168.0], [24.0, 5670.0], [25.0, 5503.0], [26.0, 6641.0], [27.0, 4827.0], [28.0, 5554.0], [29.0, 3720.0], [30.0, 5629.0], [31.0, 5383.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84973993450205, 4020.183201695242]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3033.5833333333335, "minX": 1.60190106E12, "maxY": 3616798.216666667, "series": [{"data": [[1.60190154E12, 2221461.933333333], [1.60190136E12, 2224257.7333333334], [1.60190142E12, 3075682.7666666666], [1.60190106E12, 2232589.8333333335], [1.60190124E12, 2891582.8666666667], [1.6019013E12, 2681058.316666667], [1.60190112E12, 2285309.5], [1.60190118E12, 3616798.216666667], [1.60190148E12, 2743572.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60190154E12, 3713.1833333333334], [1.60190136E12, 3826.55], [1.60190142E12, 5031.633333333333], [1.60190106E12, 3033.5833333333335], [1.60190124E12, 4738.066666666667], [1.6019013E12, 3630.4666666666667], [1.60190112E12, 4805.9], [1.60190118E12, 4883.183333333333], [1.60190148E12, 4921.483333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190154E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3566.090103397339, "minX": 1.60190106E12, "maxY": 4903.436991869918, "series": [{"data": [[1.60190154E12, 4255.0894308943125], [1.60190136E12, 4517.890977443611], [1.60190142E12, 3566.090103397339], [1.60190106E12, 4589.125295508266], [1.60190124E12, 3830.5984000000026], [1.6019013E12, 4903.436991869918], [1.60190112E12, 3669.094224924011], [1.60190118E12, 3717.1149068322993], [1.60190148E12, 3706.180555555553]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190154E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3563.9748892171383, "minX": 1.60190106E12, "maxY": 4900.9044715447135, "series": [{"data": [[1.60190154E12, 4252.963414634145], [1.60190136E12, 4515.936090225563], [1.60190142E12, 3563.9748892171383], [1.60190106E12, 4586.680851063828], [1.60190124E12, 3828.407999999997], [1.6019013E12, 4900.9044715447135], [1.60190112E12, 3667.408814589668], [1.60190118E12, 3714.451863354039], [1.60190148E12, 3704.239197530864]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190154E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.06203840472673562, "minX": 1.60190106E12, "maxY": 1.3451536643026003, "series": [{"data": [[1.60190154E12, 0.07113821138211386], [1.60190136E12, 0.0827067669172932], [1.60190142E12, 0.06203840472673562], [1.60190106E12, 1.3451536643026003], [1.60190124E12, 0.07359999999999998], [1.6019013E12, 0.07926829268292696], [1.60190112E12, 0.0729483282674771], [1.60190118E12, 0.06677018633540381], [1.60190148E12, 0.06481481481481484]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190154E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1106.0, "minX": 1.60190106E12, "maxY": 12228.0, "series": [{"data": [[1.60190154E12, 9253.0], [1.60190136E12, 11089.0], [1.60190142E12, 8014.0], [1.60190106E12, 11854.0], [1.60190124E12, 8445.0], [1.6019013E12, 12228.0], [1.60190112E12, 8858.0], [1.60190118E12, 9417.0], [1.60190148E12, 9193.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60190154E12, 1153.2359967088698], [1.60190136E12, 2119.909996187687], [1.60190142E12, 1246.7139988684655], [1.60190106E12, 1929.7839899921416], [1.60190124E12, 1194.374996572733], [1.6019013E12, 1630.8739997649193], [1.60190112E12, 1137.0], [1.60190118E12, 1290.6849973857402], [1.60190148E12, 1186.7279987621307]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60190154E12, 1165.659601316452], [1.60190136E12, 2137.898102185726], [1.60190142E12, 1250.985400452614], [1.60190106E12, 1957.484801940918], [1.60190124E12, 1204.5000004768372], [1.6019013E12, 1631.7614000940323], [1.60190112E12, 1137.524100062847], [1.60190118E12, 1296.313000369072], [1.60190148E12, 1193.1012007427216]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60190154E12, 1160.137998354435], [1.60190136E12, 2128.730497267842], [1.60190142E12, 1249.0869994342327], [1.60190106E12, 1949.3439975738524], [1.60190124E12, 1201.5624982863665], [1.6019013E12, 1631.3669998824596], [1.60190112E12, 1137.2604999214411], [1.60190118E12, 1294.76499953866], [1.60190148E12, 1189.9859990715981]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60190154E12, 1106.0], [1.60190136E12, 1672.0], [1.60190142E12, 1191.0], [1.60190106E12, 1754.0], [1.60190124E12, 1132.0], [1.6019013E12, 1448.0], [1.60190112E12, 1129.0], [1.60190118E12, 1260.0], [1.60190148E12, 1161.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60190154E12, 4238.0], [1.60190136E12, 4079.5], [1.60190142E12, 3349.0], [1.60190106E12, 4362.0], [1.60190124E12, 3760.5], [1.6019013E12, 4742.5], [1.60190112E12, 3465.5], [1.60190118E12, 3570.5], [1.60190148E12, 3607.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190154E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1342.0, "minX": 1.0, "maxY": 5788.0, "series": [{"data": [[2.0, 4874.0], [3.0, 5788.0], [4.0, 5377.5], [5.0, 5296.0], [6.0, 4991.0], [7.0, 4397.0], [8.0, 4344.0], [9.0, 4032.0], [10.0, 3937.5], [11.0, 3981.0], [12.0, 3749.5], [13.0, 3619.0], [14.0, 3404.0], [15.0, 2698.5], [1.0, 2317.0], [16.0, 2687.5], [17.0, 2522.0], [18.0, 2481.5], [19.0, 2528.0], [20.0, 1938.5], [21.0, 2159.5], [22.0, 2059.5], [23.0, 1759.0], [24.0, 1834.0], [27.0, 2976.0], [28.0, 2416.5], [29.0, 1342.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 5363.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1341.5, "minX": 1.0, "maxY": 5787.0, "series": [{"data": [[2.0, 4874.0], [3.0, 5787.0], [4.0, 5375.5], [5.0, 5292.0], [6.0, 4987.0], [7.0, 4394.0], [8.0, 4342.5], [9.0, 4030.0], [10.0, 3934.0], [11.0, 3979.0], [12.0, 3747.5], [13.0, 3619.0], [14.0, 3403.5], [15.0, 2698.5], [1.0, 2313.0], [16.0, 2686.0], [17.0, 2522.0], [18.0, 2480.5], [19.0, 2528.0], [20.0, 1938.5], [21.0, 2159.5], [22.0, 2059.5], [23.0, 1759.0], [24.0, 1832.5], [27.0, 2976.0], [28.0, 2416.5], [29.0, 1341.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 5363.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 7.533333333333333, "minX": 1.60190106E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60190154E12, 7.533333333333333], [1.60190136E12, 8.866666666666667], [1.60190142E12, 11.283333333333333], [1.60190106E12, 7.716666666666667], [1.60190124E12, 10.416666666666666], [1.6019013E12, 8.2], [1.60190112E12, 10.966666666666667], [1.60190118E12, 10.733333333333333], [1.60190148E12, 10.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190154E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190106E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60190154E12, 8.2], [1.60190136E12, 8.866666666666667], [1.60190142E12, 11.283333333333333], [1.60190106E12, 7.05], [1.60190124E12, 10.4], [1.6019013E12, 8.2], [1.60190112E12, 10.966666666666667], [1.60190118E12, 10.733333333333333], [1.60190148E12, 10.8]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60190124E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190154E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190106E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60190154E12, 8.2], [1.60190136E12, 8.866666666666667], [1.60190142E12, 11.283333333333333], [1.60190106E12, 7.05], [1.60190124E12, 10.4], [1.6019013E12, 8.2], [1.60190112E12, 10.966666666666667], [1.60190118E12, 10.733333333333333], [1.60190148E12, 10.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60190124E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190154E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190106E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60190154E12, 8.2], [1.60190136E12, 8.866666666666667], [1.60190142E12, 11.283333333333333], [1.60190106E12, 7.05], [1.60190124E12, 10.4], [1.6019013E12, 8.2], [1.60190112E12, 10.966666666666667], [1.60190118E12, 10.733333333333333], [1.60190148E12, 10.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60190124E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190154E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

