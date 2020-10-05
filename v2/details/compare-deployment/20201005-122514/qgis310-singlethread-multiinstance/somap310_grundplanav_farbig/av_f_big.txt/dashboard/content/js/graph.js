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
        data: {"result": {"minY": 1542.0, "minX": 0.0, "maxY": 8493.0, "series": [{"data": [[0.0, 1542.0], [0.1, 1542.0], [0.2, 1558.0], [0.3, 1587.0], [0.4, 1587.0], [0.5, 1612.0], [0.6, 1618.0], [0.7, 1645.0], [0.8, 1645.0], [0.9, 1662.0], [1.0, 1671.0], [1.1, 1677.0], [1.2, 1677.0], [1.3, 1806.0], [1.4, 1829.0], [1.5, 1863.0], [1.6, 1863.0], [1.7, 1868.0], [1.8, 1869.0], [1.9, 1869.0], [2.0, 1880.0], [2.1, 1886.0], [2.2, 1887.0], [2.3, 1887.0], [2.4, 1908.0], [2.5, 1943.0], [2.6, 1975.0], [2.7, 1975.0], [2.8, 1992.0], [2.9, 2018.0], [3.0, 2035.0], [3.1, 2035.0], [3.2, 2061.0], [3.3, 2070.0], [3.4, 2070.0], [3.5, 2129.0], [3.6, 2141.0], [3.7, 2144.0], [3.8, 2144.0], [3.9, 2155.0], [4.0, 2195.0], [4.1, 2246.0], [4.2, 2246.0], [4.3, 2247.0], [4.4, 2253.0], [4.5, 2263.0], [4.6, 2263.0], [4.7, 2266.0], [4.8, 2287.0], [4.9, 2291.0], [5.0, 2291.0], [5.1, 2298.0], [5.2, 2311.0], [5.3, 2311.0], [5.4, 2316.0], [5.5, 2323.0], [5.6, 2332.0], [5.7, 2332.0], [5.8, 2333.0], [5.9, 2342.0], [6.0, 2352.0], [6.1, 2352.0], [6.2, 2367.0], [6.3, 2381.0], [6.4, 2381.0], [6.5, 2381.0], [6.6, 2390.0], [6.7, 2393.0], [6.8, 2393.0], [6.9, 2397.0], [7.0, 2401.0], [7.1, 2411.0], [7.2, 2411.0], [7.3, 2416.0], [7.4, 2434.0], [7.5, 2447.0], [7.6, 2447.0], [7.7, 2449.0], [7.8, 2449.0], [7.9, 2452.0], [8.0, 2452.0], [8.1, 2462.0], [8.2, 2480.0], [8.3, 2495.0], [8.4, 2495.0], [8.5, 2496.0], [8.6, 2496.0], [8.7, 2496.0], [8.8, 2498.0], [8.9, 2498.0], [9.0, 2503.0], [9.1, 2503.0], [9.2, 2522.0], [9.3, 2525.0], [9.4, 2527.0], [9.5, 2527.0], [9.6, 2528.0], [9.7, 2538.0], [9.8, 2542.0], [9.9, 2542.0], [10.0, 2552.0], [10.1, 2556.0], [10.2, 2556.0], [10.3, 2560.0], [10.4, 2569.0], [10.5, 2583.0], [10.6, 2583.0], [10.7, 2586.0], [10.8, 2590.0], [10.9, 2606.0], [11.0, 2606.0], [11.1, 2615.0], [11.2, 2616.0], [11.3, 2640.0], [11.4, 2640.0], [11.5, 2650.0], [11.6, 2655.0], [11.7, 2655.0], [11.8, 2663.0], [11.9, 2668.0], [12.0, 2680.0], [12.1, 2680.0], [12.2, 2686.0], [12.3, 2694.0], [12.4, 2704.0], [12.5, 2704.0], [12.6, 2712.0], [12.7, 2715.0], [12.8, 2719.0], [12.9, 2719.0], [13.0, 2719.0], [13.1, 2728.0], [13.2, 2728.0], [13.3, 2728.0], [13.4, 2734.0], [13.5, 2735.0], [13.6, 2735.0], [13.7, 2736.0], [13.8, 2738.0], [13.9, 2747.0], [14.0, 2747.0], [14.1, 2750.0], [14.2, 2751.0], [14.3, 2770.0], [14.4, 2770.0], [14.5, 2773.0], [14.6, 2776.0], [14.7, 2782.0], [14.8, 2782.0], [14.9, 2787.0], [15.0, 2801.0], [15.1, 2801.0], [15.2, 2805.0], [15.3, 2807.0], [15.4, 2808.0], [15.5, 2808.0], [15.6, 2815.0], [15.7, 2816.0], [15.8, 2834.0], [15.9, 2834.0], [16.0, 2834.0], [16.1, 2843.0], [16.2, 2859.0], [16.3, 2859.0], [16.4, 2866.0], [16.5, 2869.0], [16.6, 2869.0], [16.7, 2869.0], [16.8, 2873.0], [16.9, 2879.0], [17.0, 2879.0], [17.1, 2891.0], [17.2, 2904.0], [17.3, 2905.0], [17.4, 2905.0], [17.5, 2910.0], [17.6, 2912.0], [17.7, 2919.0], [17.8, 2919.0], [17.9, 2919.0], [18.0, 2921.0], [18.1, 2921.0], [18.2, 2921.0], [18.3, 2923.0], [18.4, 2927.0], [18.5, 2927.0], [18.6, 2939.0], [18.7, 2941.0], [18.8, 2946.0], [18.9, 2946.0], [19.0, 2949.0], [19.1, 2960.0], [19.2, 2960.0], [19.3, 2960.0], [19.4, 2962.0], [19.5, 2962.0], [19.6, 2965.0], [19.7, 2965.0], [19.8, 2965.0], [19.9, 2966.0], [20.0, 2969.0], [20.1, 2969.0], [20.2, 2980.0], [20.3, 2983.0], [20.4, 2983.0], [20.5, 2984.0], [20.6, 2988.0], [20.7, 2994.0], [20.8, 2994.0], [20.9, 2996.0], [21.0, 2998.0], [21.1, 2999.0], [21.2, 2999.0], [21.3, 2999.0], [21.4, 3013.0], [21.5, 3017.0], [21.6, 3017.0], [21.7, 3018.0], [21.8, 3019.0], [21.9, 3019.0], [22.0, 3030.0], [22.1, 3035.0], [22.2, 3037.0], [22.3, 3037.0], [22.4, 3046.0], [22.5, 3047.0], [22.6, 3057.0], [22.7, 3057.0], [22.8, 3064.0], [22.9, 3067.0], [23.0, 3069.0], [23.1, 3069.0], [23.2, 3070.0], [23.3, 3071.0], [23.4, 3071.0], [23.5, 3076.0], [23.6, 3087.0], [23.7, 3088.0], [23.8, 3088.0], [23.9, 3088.0], [24.0, 3090.0], [24.1, 3090.0], [24.2, 3090.0], [24.3, 3091.0], [24.4, 3096.0], [24.5, 3100.0], [24.6, 3100.0], [24.7, 3101.0], [24.8, 3129.0], [24.9, 3131.0], [25.0, 3131.0], [25.1, 3131.0], [25.2, 3132.0], [25.3, 3132.0], [25.4, 3144.0], [25.5, 3148.0], [25.6, 3149.0], [25.7, 3149.0], [25.8, 3160.0], [25.9, 3179.0], [26.0, 3184.0], [26.1, 3184.0], [26.2, 3187.0], [26.3, 3200.0], [26.4, 3204.0], [26.5, 3204.0], [26.6, 3205.0], [26.7, 3206.0], [26.8, 3206.0], [26.9, 3229.0], [27.0, 3238.0], [27.1, 3243.0], [27.2, 3243.0], [27.3, 3249.0], [27.4, 3252.0], [27.5, 3255.0], [27.6, 3255.0], [27.7, 3255.0], [27.8, 3256.0], [27.9, 3259.0], [28.0, 3259.0], [28.1, 3268.0], [28.2, 3272.0], [28.3, 3276.0], [28.4, 3276.0], [28.5, 3280.0], [28.6, 3280.0], [28.7, 3280.0], [28.8, 3280.0], [28.9, 3280.0], [29.0, 3287.0], [29.1, 3287.0], [29.2, 3295.0], [29.3, 3297.0], [29.4, 3301.0], [29.5, 3301.0], [29.6, 3310.0], [29.7, 3312.0], [29.8, 3313.0], [29.9, 3313.0], [30.0, 3315.0], [30.1, 3316.0], [30.2, 3316.0], [30.3, 3317.0], [30.4, 3329.0], [30.5, 3338.0], [30.6, 3338.0], [30.7, 3343.0], [30.8, 3343.0], [30.9, 3351.0], [31.0, 3351.0], [31.1, 3361.0], [31.2, 3368.0], [31.3, 3375.0], [31.4, 3375.0], [31.5, 3376.0], [31.6, 3380.0], [31.7, 3380.0], [31.8, 3388.0], [31.9, 3390.0], [32.0, 3412.0], [32.1, 3412.0], [32.2, 3418.0], [32.3, 3419.0], [32.4, 3422.0], [32.5, 3422.0], [32.6, 3423.0], [32.7, 3425.0], [32.8, 3426.0], [32.9, 3426.0], [33.0, 3434.0], [33.1, 3435.0], [33.2, 3448.0], [33.3, 3448.0], [33.4, 3449.0], [33.5, 3453.0], [33.6, 3453.0], [33.7, 3461.0], [33.8, 3465.0], [33.9, 3466.0], [34.0, 3466.0], [34.1, 3469.0], [34.2, 3477.0], [34.3, 3482.0], [34.4, 3482.0], [34.5, 3487.0], [34.6, 3487.0], [34.7, 3490.0], [34.8, 3490.0], [34.9, 3492.0], [35.0, 3502.0], [35.1, 3502.0], [35.2, 3511.0], [35.3, 3517.0], [35.4, 3518.0], [35.5, 3518.0], [35.6, 3520.0], [35.7, 3530.0], [35.8, 3532.0], [35.9, 3532.0], [36.0, 3537.0], [36.1, 3540.0], [36.2, 3548.0], [36.3, 3548.0], [36.4, 3551.0], [36.5, 3552.0], [36.6, 3556.0], [36.7, 3556.0], [36.8, 3556.0], [36.9, 3557.0], [37.0, 3557.0], [37.1, 3561.0], [37.2, 3567.0], [37.3, 3568.0], [37.4, 3568.0], [37.5, 3570.0], [37.6, 3573.0], [37.7, 3584.0], [37.8, 3584.0], [37.9, 3588.0], [38.0, 3601.0], [38.1, 3605.0], [38.2, 3605.0], [38.3, 3613.0], [38.4, 3626.0], [38.5, 3626.0], [38.6, 3627.0], [38.7, 3628.0], [38.8, 3632.0], [38.9, 3632.0], [39.0, 3636.0], [39.1, 3638.0], [39.2, 3641.0], [39.3, 3641.0], [39.4, 3643.0], [39.5, 3644.0], [39.6, 3646.0], [39.7, 3646.0], [39.8, 3650.0], [39.9, 3664.0], [40.0, 3675.0], [40.1, 3675.0], [40.2, 3675.0], [40.3, 3683.0], [40.4, 3683.0], [40.5, 3685.0], [40.6, 3687.0], [40.7, 3688.0], [40.8, 3688.0], [40.9, 3691.0], [41.0, 3708.0], [41.1, 3724.0], [41.2, 3724.0], [41.3, 3724.0], [41.4, 3733.0], [41.5, 3737.0], [41.6, 3737.0], [41.7, 3738.0], [41.8, 3742.0], [41.9, 3742.0], [42.0, 3758.0], [42.1, 3764.0], [42.2, 3767.0], [42.3, 3767.0], [42.4, 3780.0], [42.5, 3787.0], [42.6, 3791.0], [42.7, 3791.0], [42.8, 3795.0], [42.9, 3796.0], [43.0, 3796.0], [43.1, 3796.0], [43.2, 3819.0], [43.3, 3828.0], [43.4, 3828.0], [43.5, 3833.0], [43.6, 3836.0], [43.7, 3837.0], [43.8, 3837.0], [43.9, 3842.0], [44.0, 3846.0], [44.1, 3846.0], [44.2, 3846.0], [44.3, 3848.0], [44.4, 3861.0], [44.5, 3862.0], [44.6, 3862.0], [44.7, 3876.0], [44.8, 3879.0], [44.9, 3887.0], [45.0, 3887.0], [45.1, 3889.0], [45.2, 3899.0], [45.3, 3899.0], [45.4, 3920.0], [45.5, 3922.0], [45.6, 3943.0], [45.7, 3943.0], [45.8, 3970.0], [45.9, 3971.0], [46.0, 3977.0], [46.1, 3977.0], [46.2, 3981.0], [46.3, 3985.0], [46.4, 3986.0], [46.5, 3986.0], [46.6, 3992.0], [46.7, 4024.0], [46.8, 4024.0], [46.9, 4026.0], [47.0, 4027.0], [47.1, 4060.0], [47.2, 4060.0], [47.3, 4071.0], [47.4, 4099.0], [47.5, 4107.0], [47.6, 4107.0], [47.7, 4116.0], [47.8, 4122.0], [47.9, 4124.0], [48.0, 4124.0], [48.1, 4151.0], [48.2, 4153.0], [48.3, 4164.0], [48.4, 4164.0], [48.5, 4174.0], [48.6, 4175.0], [48.7, 4175.0], [48.8, 4187.0], [48.9, 4202.0], [49.0, 4213.0], [49.1, 4213.0], [49.2, 4224.0], [49.3, 4232.0], [49.4, 4269.0], [49.5, 4269.0], [49.6, 4297.0], [49.7, 4299.0], [49.8, 4315.0], [49.9, 4315.0], [50.0, 4317.0], [50.1, 4322.0], [50.2, 4322.0], [50.3, 4327.0], [50.4, 4330.0], [50.5, 4345.0], [50.6, 4345.0], [50.7, 4350.0], [50.8, 4352.0], [50.9, 4354.0], [51.0, 4354.0], [51.1, 4359.0], [51.2, 4361.0], [51.3, 4376.0], [51.4, 4376.0], [51.5, 4381.0], [51.6, 4400.0], [51.7, 4400.0], [51.8, 4400.0], [51.9, 4406.0], [52.0, 4413.0], [52.1, 4413.0], [52.2, 4424.0], [52.3, 4425.0], [52.4, 4428.0], [52.5, 4428.0], [52.6, 4438.0], [52.7, 4452.0], [52.8, 4460.0], [52.9, 4460.0], [53.0, 4463.0], [53.1, 4468.0], [53.2, 4472.0], [53.3, 4472.0], [53.4, 4486.0], [53.5, 4497.0], [53.6, 4497.0], [53.7, 4498.0], [53.8, 4502.0], [53.9, 4503.0], [54.0, 4503.0], [54.1, 4521.0], [54.2, 4539.0], [54.3, 4546.0], [54.4, 4546.0], [54.5, 4548.0], [54.6, 4554.0], [54.7, 4569.0], [54.8, 4569.0], [54.9, 4576.0], [55.0, 4587.0], [55.1, 4587.0], [55.2, 4602.0], [55.3, 4605.0], [55.4, 4623.0], [55.5, 4623.0], [55.6, 4625.0], [55.7, 4647.0], [55.8, 4649.0], [55.9, 4649.0], [56.0, 4652.0], [56.1, 4657.0], [56.2, 4662.0], [56.3, 4662.0], [56.4, 4666.0], [56.5, 4667.0], [56.6, 4673.0], [56.7, 4673.0], [56.8, 4680.0], [56.9, 4680.0], [57.0, 4680.0], [57.1, 4688.0], [57.2, 4688.0], [57.3, 4703.0], [57.4, 4703.0], [57.5, 4705.0], [57.6, 4707.0], [57.7, 4715.0], [57.8, 4715.0], [57.9, 4716.0], [58.0, 4730.0], [58.1, 4737.0], [58.2, 4737.0], [58.3, 4737.0], [58.4, 4742.0], [58.5, 4742.0], [58.6, 4743.0], [58.7, 4743.0], [58.8, 4744.0], [58.9, 4744.0], [59.0, 4745.0], [59.1, 4747.0], [59.2, 4755.0], [59.3, 4755.0], [59.4, 4760.0], [59.5, 4764.0], [59.6, 4766.0], [59.7, 4766.0], [59.8, 4768.0], [59.9, 4776.0], [60.0, 4782.0], [60.1, 4782.0], [60.2, 4783.0], [60.3, 4791.0], [60.4, 4791.0], [60.5, 4797.0], [60.6, 4799.0], [60.7, 4801.0], [60.8, 4801.0], [60.9, 4801.0], [61.0, 4816.0], [61.1, 4819.0], [61.2, 4819.0], [61.3, 4821.0], [61.4, 4834.0], [61.5, 4836.0], [61.6, 4836.0], [61.7, 4850.0], [61.8, 4858.0], [61.9, 4858.0], [62.0, 4858.0], [62.1, 4861.0], [62.2, 4864.0], [62.3, 4864.0], [62.4, 4865.0], [62.5, 4866.0], [62.6, 4874.0], [62.7, 4874.0], [62.8, 4877.0], [62.9, 4880.0], [63.0, 4885.0], [63.1, 4885.0], [63.2, 4889.0], [63.3, 4916.0], [63.4, 4916.0], [63.5, 4923.0], [63.6, 4926.0], [63.7, 4940.0], [63.8, 4940.0], [63.9, 4941.0], [64.0, 4943.0], [64.1, 4944.0], [64.2, 4944.0], [64.3, 4949.0], [64.4, 4951.0], [64.5, 4954.0], [64.6, 4954.0], [64.7, 4974.0], [64.8, 4990.0], [64.9, 4995.0], [65.0, 4995.0], [65.1, 5003.0], [65.2, 5012.0], [65.3, 5012.0], [65.4, 5020.0], [65.5, 5021.0], [65.6, 5023.0], [65.7, 5023.0], [65.8, 5034.0], [65.9, 5044.0], [66.0, 5044.0], [66.1, 5044.0], [66.2, 5045.0], [66.3, 5046.0], [66.4, 5057.0], [66.5, 5057.0], [66.6, 5058.0], [66.7, 5060.0], [66.8, 5060.0], [66.9, 5073.0], [67.0, 5083.0], [67.1, 5086.0], [67.2, 5086.0], [67.3, 5093.0], [67.4, 5101.0], [67.5, 5104.0], [67.6, 5104.0], [67.7, 5104.0], [67.8, 5105.0], [67.9, 5114.0], [68.0, 5114.0], [68.1, 5142.0], [68.2, 5155.0], [68.3, 5161.0], [68.4, 5161.0], [68.5, 5167.0], [68.6, 5179.0], [68.7, 5179.0], [68.8, 5180.0], [68.9, 5181.0], [69.0, 5185.0], [69.1, 5185.0], [69.2, 5185.0], [69.3, 5186.0], [69.4, 5193.0], [69.5, 5193.0], [69.6, 5204.0], [69.7, 5204.0], [69.8, 5209.0], [69.9, 5209.0], [70.0, 5210.0], [70.1, 5213.0], [70.2, 5213.0], [70.3, 5225.0], [70.4, 5226.0], [70.5, 5235.0], [70.6, 5235.0], [70.7, 5245.0], [70.8, 5258.0], [70.9, 5263.0], [71.0, 5263.0], [71.1, 5263.0], [71.2, 5265.0], [71.3, 5265.0], [71.4, 5265.0], [71.5, 5265.0], [71.6, 5270.0], [71.7, 5270.0], [71.8, 5271.0], [71.9, 5273.0], [72.0, 5289.0], [72.1, 5289.0], [72.2, 5290.0], [72.3, 5294.0], [72.4, 5308.0], [72.5, 5308.0], [72.6, 5313.0], [72.7, 5315.0], [72.8, 5317.0], [72.9, 5317.0], [73.0, 5332.0], [73.1, 5332.0], [73.2, 5332.0], [73.3, 5332.0], [73.4, 5349.0], [73.5, 5357.0], [73.6, 5357.0], [73.7, 5369.0], [73.8, 5370.0], [73.9, 5377.0], [74.0, 5377.0], [74.1, 5378.0], [74.2, 5383.0], [74.3, 5384.0], [74.4, 5384.0], [74.5, 5385.0], [74.6, 5394.0], [74.7, 5412.0], [74.8, 5412.0], [74.9, 5415.0], [75.0, 5425.0], [75.1, 5425.0], [75.2, 5428.0], [75.3, 5433.0], [75.4, 5452.0], [75.5, 5452.0], [75.6, 5461.0], [75.7, 5463.0], [75.8, 5465.0], [75.9, 5465.0], [76.0, 5471.0], [76.1, 5472.0], [76.2, 5479.0], [76.3, 5479.0], [76.4, 5484.0], [76.5, 5493.0], [76.6, 5493.0], [76.7, 5493.0], [76.8, 5501.0], [76.9, 5505.0], [77.0, 5505.0], [77.1, 5509.0], [77.2, 5523.0], [77.3, 5524.0], [77.4, 5524.0], [77.5, 5525.0], [77.6, 5525.0], [77.7, 5529.0], [77.8, 5529.0], [77.9, 5533.0], [78.0, 5536.0], [78.1, 5539.0], [78.2, 5539.0], [78.3, 5545.0], [78.4, 5546.0], [78.5, 5546.0], [78.6, 5557.0], [78.7, 5563.0], [78.8, 5564.0], [78.9, 5564.0], [79.0, 5571.0], [79.1, 5576.0], [79.2, 5586.0], [79.3, 5586.0], [79.4, 5589.0], [79.5, 5600.0], [79.6, 5606.0], [79.7, 5606.0], [79.8, 5610.0], [79.9, 5612.0], [80.0, 5617.0], [80.1, 5617.0], [80.2, 5628.0], [80.3, 5632.0], [80.4, 5632.0], [80.5, 5645.0], [80.6, 5648.0], [80.7, 5651.0], [80.8, 5651.0], [80.9, 5660.0], [81.0, 5661.0], [81.1, 5672.0], [81.2, 5672.0], [81.3, 5673.0], [81.4, 5674.0], [81.5, 5683.0], [81.6, 5683.0], [81.7, 5684.0], [81.8, 5685.0], [81.9, 5685.0], [82.0, 5687.0], [82.1, 5695.0], [82.2, 5696.0], [82.3, 5696.0], [82.4, 5703.0], [82.5, 5712.0], [82.6, 5713.0], [82.7, 5713.0], [82.8, 5716.0], [82.9, 5725.0], [83.0, 5725.0], [83.1, 5725.0], [83.2, 5734.0], [83.3, 5739.0], [83.4, 5739.0], [83.5, 5745.0], [83.6, 5754.0], [83.7, 5759.0], [83.8, 5759.0], [83.9, 5767.0], [84.0, 5786.0], [84.1, 5802.0], [84.2, 5802.0], [84.3, 5811.0], [84.4, 5815.0], [84.5, 5827.0], [84.6, 5827.0], [84.7, 5840.0], [84.8, 5856.0], [84.9, 5860.0], [85.0, 5860.0], [85.1, 5865.0], [85.2, 5865.0], [85.3, 5865.0], [85.4, 5866.0], [85.5, 5879.0], [85.6, 5900.0], [85.7, 5900.0], [85.8, 5900.0], [85.9, 5903.0], [86.0, 5905.0], [86.1, 5905.0], [86.2, 5905.0], [86.3, 5912.0], [86.4, 5925.0], [86.5, 5925.0], [86.6, 5925.0], [86.7, 5929.0], [86.8, 5929.0], [86.9, 5929.0], [87.0, 5933.0], [87.1, 5935.0], [87.2, 5935.0], [87.3, 5941.0], [87.4, 5963.0], [87.5, 5966.0], [87.6, 5966.0], [87.7, 5970.0], [87.8, 5973.0], [87.9, 5982.0], [88.0, 5982.0], [88.1, 5982.0], [88.2, 5994.0], [88.3, 5995.0], [88.4, 5995.0], [88.5, 6012.0], [88.6, 6016.0], [88.7, 6016.0], [88.8, 6035.0], [88.9, 6035.0], [89.0, 6040.0], [89.1, 6040.0], [89.2, 6051.0], [89.3, 6051.0], [89.4, 6052.0], [89.5, 6052.0], [89.6, 6061.0], [89.7, 6073.0], [89.8, 6077.0], [89.9, 6077.0], [90.0, 6083.0], [90.1, 6085.0], [90.2, 6085.0], [90.3, 6104.0], [90.4, 6124.0], [90.5, 6125.0], [90.6, 6125.0], [90.7, 6125.0], [90.8, 6128.0], [90.9, 6159.0], [91.0, 6159.0], [91.1, 6167.0], [91.2, 6178.0], [91.3, 6185.0], [91.4, 6185.0], [91.5, 6195.0], [91.6, 6209.0], [91.7, 6209.0], [91.8, 6212.0], [91.9, 6235.0], [92.0, 6236.0], [92.1, 6236.0], [92.2, 6248.0], [92.3, 6254.0], [92.4, 6261.0], [92.5, 6261.0], [92.6, 6265.0], [92.7, 6269.0], [92.8, 6270.0], [92.9, 6270.0], [93.0, 6271.0], [93.1, 6280.0], [93.2, 6292.0], [93.3, 6292.0], [93.4, 6326.0], [93.5, 6329.0], [93.6, 6329.0], [93.7, 6342.0], [93.8, 6356.0], [93.9, 6367.0], [94.0, 6367.0], [94.1, 6375.0], [94.2, 6393.0], [94.3, 6397.0], [94.4, 6397.0], [94.5, 6407.0], [94.6, 6419.0], [94.7, 6435.0], [94.8, 6435.0], [94.9, 6437.0], [95.0, 6444.0], [95.1, 6444.0], [95.2, 6525.0], [95.3, 6527.0], [95.4, 6535.0], [95.5, 6535.0], [95.6, 6536.0], [95.7, 6543.0], [95.8, 6553.0], [95.9, 6553.0], [96.0, 6562.0], [96.1, 6597.0], [96.2, 6619.0], [96.3, 6619.0], [96.4, 6635.0], [96.5, 6639.0], [96.6, 6645.0], [96.7, 6645.0], [96.8, 6681.0], [96.9, 6684.0], [97.0, 6684.0], [97.1, 6686.0], [97.2, 6750.0], [97.3, 6880.0], [97.4, 6880.0], [97.5, 6938.0], [97.6, 6961.0], [97.7, 6997.0], [97.8, 6997.0], [97.9, 7054.0], [98.0, 7074.0], [98.1, 7204.0], [98.2, 7204.0], [98.3, 7267.0], [98.4, 7303.0], [98.5, 7303.0], [98.6, 7306.0], [98.7, 7307.0], [98.8, 7328.0], [98.9, 7328.0], [99.0, 7384.0], [99.1, 7634.0], [99.2, 7744.0], [99.3, 7744.0], [99.4, 7751.0], [99.5, 7965.0], [99.6, 8038.0], [99.7, 8038.0], [99.8, 8443.0], [99.9, 8493.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1500.0, "maxY": 31.0, "series": [{"data": [[1500.0, 3.0], [1600.0, 6.0], [1800.0, 8.0], [1900.0, 4.0], [2000.0, 4.0], [2100.0, 5.0], [2300.0, 13.0], [2200.0, 8.0], [2400.0, 15.0], [2500.0, 14.0], [2600.0, 11.0], [2700.0, 19.0], [2800.0, 16.0], [2900.0, 31.0], [3000.0, 23.0], [3100.0, 13.0], [3200.0, 23.0], [3300.0, 19.0], [3400.0, 22.0], [3500.0, 22.0], [3600.0, 22.0], [3700.0, 16.0], [3800.0, 16.0], [3900.0, 10.0], [4000.0, 6.0], [4100.0, 10.0], [4300.0, 13.0], [4200.0, 7.0], [4400.0, 16.0], [4600.0, 16.0], [4500.0, 10.0], [4700.0, 25.0], [4800.0, 19.0], [5100.0, 16.0], [5000.0, 17.0], [4900.0, 13.0], [5200.0, 21.0], [5300.0, 17.0], [5500.0, 20.0], [5600.0, 21.0], [5400.0, 15.0], [5800.0, 11.0], [5700.0, 13.0], [6000.0, 13.0], [5900.0, 21.0], [6100.0, 10.0], [6300.0, 8.0], [6200.0, 13.0], [6500.0, 8.0], [6600.0, 7.0], [6400.0, 5.0], [6900.0, 3.0], [6800.0, 1.0], [6700.0, 1.0], [7000.0, 2.0], [7200.0, 2.0], [7300.0, 5.0], [7600.0, 1.0], [7900.0, 1.0], [7700.0, 2.0], [8000.0, 1.0], [8400.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.60190094E12, "maxY": 40.0, "series": [{"data": [[1.60190094E12, 40.0], [1.60190106E12, 2.5], [1.601901E12, 38.89667250437828]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1618.0, "minX": 1.0, "maxY": 6437.0, "series": [{"data": [[33.0, 2988.0], [32.0, 5193.0], [2.0, 5263.0], [35.0, 1677.0], [34.0, 5463.0], [37.0, 2960.0], [36.0, 2680.0], [39.0, 3100.0], [38.0, 1618.0], [40.0, 4320.721264367815], [3.0, 5186.0], [4.0, 6437.0], [5.0, 5245.0], [6.0, 5840.0], [7.0, 3070.0], [8.0, 5935.0], [9.0, 4944.0], [10.0, 5020.0], [11.0, 2569.0], [12.0, 5674.0], [13.0, 3601.0], [14.0, 5546.0], [15.0, 2528.0], [16.0, 3613.0], [1.0, 5317.0], [17.0, 2155.0], [18.0, 2527.0], [19.0, 3638.0], [20.0, 2129.0], [21.0, 5265.0], [22.0, 2503.0], [23.0, 4647.0], [24.0, 3540.0], [25.0, 2919.0], [26.0, 5370.0], [27.0, 4801.0], [28.0, 2801.0], [29.0, 4707.0], [30.0, 4926.0], [31.0, 2715.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.93877551020409, 4303.853061224489]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 29.333333333333332, "minX": 1.60190094E12, "maxY": 1306299.5166666666, "series": [{"data": [[1.60190094E12, 516404.9166666667], [1.60190106E12, 13072.216666666667], [1.601901E12, 1306299.5166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60190094E12, 1211.2166666666667], [1.60190106E12, 29.333333333333332], [1.601901E12, 4282.483333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4196.775831873897, "minX": 1.60190094E12, "maxY": 5550.75, "series": [{"data": [[1.60190094E12, 4654.812499999998], [1.60190106E12, 5550.75], [1.601901E12, 4196.775831873897]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4195.714535901923, "minX": 1.60190094E12, "maxY": 5549.0, "series": [{"data": [[1.60190094E12, 4653.2375], [1.60190106E12, 5549.0], [1.601901E12, 4195.714535901923]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60190094E12, "maxY": 4.337499999999998, "series": [{"data": [[1.60190094E12, 4.337499999999998], [1.60190106E12, 0.0], [1.601901E12, 0.07705779334500873]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1542.0, "minX": 1.60190094E12, "maxY": 8493.0, "series": [{"data": [[1.60190094E12, 8493.0], [1.60190106E12, 6437.0], [1.601901E12, 7751.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60190094E12, 1865.6939997696877], [1.60190106E12, 5186.0], [1.601901E12, 1621.9959963178635]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60190094E12, 1866.563400092125], [1.60190106E12, 5186.0], [1.601901E12, 1635.8956014728547]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60190094E12, 1866.1769998848438], [1.60190106E12, 5186.0], [1.601901E12, 1629.7179981589318]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60190094E12, 1863.0], [1.60190106E12, 5186.0], [1.601901E12, 1542.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60190094E12, 4739.5], [1.60190106E12, 5290.0], [1.601901E12, 4071.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3019.0, "minX": 1.0, "maxY": 5317.0, "series": [{"data": [[2.0, 3353.0], [8.0, 4863.0], [9.0, 4652.0], [10.0, 4340.0], [11.0, 4216.5], [12.0, 3575.5], [3.0, 5263.0], [13.0, 3076.0], [14.0, 3277.0], [15.0, 3737.0], [4.0, 5066.5], [16.0, 3212.5], [1.0, 5317.0], [17.0, 3019.0], [5.0, 4863.5], [6.0, 3890.5], [7.0, 5057.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3018.0, "minX": 1.0, "maxY": 5317.0, "series": [{"data": [[2.0, 3347.0], [8.0, 4862.5], [9.0, 4652.0], [10.0, 4338.5], [11.0, 4216.0], [12.0, 3575.0], [3.0, 5262.0], [13.0, 3075.0], [14.0, 3276.0], [15.0, 3737.0], [4.0, 5065.5], [16.0, 3212.0], [1.0, 5317.0], [17.0, 3018.0], [5.0, 4862.0], [6.0, 3889.0], [7.0, 5056.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.60190094E12, "maxY": 8.916666666666666, "series": [{"data": [[1.60190094E12, 3.3333333333333335], [1.601901E12, 8.916666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.601901E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60190094E12, "maxY": 9.516666666666667, "series": [{"data": [[1.60190094E12, 2.6666666666666665], [1.60190106E12, 0.06666666666666667], [1.601901E12, 9.516666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60190094E12, "maxY": 9.516666666666667, "series": [{"data": [[1.60190094E12, 2.6666666666666665], [1.60190106E12, 0.06666666666666667], [1.601901E12, 9.516666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60190094E12, "maxY": 9.516666666666667, "series": [{"data": [[1.60190094E12, 2.6666666666666665], [1.60190106E12, 0.06666666666666667], [1.601901E12, 9.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190106E12, "title": "Total Transactions Per Second"}},
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

