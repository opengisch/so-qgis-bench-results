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
        data: {"result": {"minY": 2004.0, "minX": 0.0, "maxY": 7777.0, "series": [{"data": [[0.0, 2004.0], [0.1, 2004.0], [0.2, 2015.0], [0.3, 2080.0], [0.4, 2080.0], [0.5, 2122.0], [0.6, 2460.0], [0.7, 2503.0], [0.8, 2503.0], [0.9, 2530.0], [1.0, 2583.0], [1.1, 2594.0], [1.2, 2594.0], [1.3, 2597.0], [1.4, 2604.0], [1.5, 2609.0], [1.6, 2609.0], [1.7, 2624.0], [1.8, 2634.0], [1.9, 2634.0], [2.0, 2643.0], [2.1, 2648.0], [2.2, 2650.0], [2.3, 2650.0], [2.4, 2652.0], [2.5, 2653.0], [2.6, 2694.0], [2.7, 2694.0], [2.8, 2695.0], [2.9, 2697.0], [3.0, 2722.0], [3.1, 2722.0], [3.2, 2731.0], [3.3, 2753.0], [3.4, 2753.0], [3.5, 2765.0], [3.6, 2772.0], [3.7, 2774.0], [3.8, 2774.0], [3.9, 2808.0], [4.0, 2811.0], [4.1, 2820.0], [4.2, 2820.0], [4.3, 2825.0], [4.4, 2890.0], [4.5, 2891.0], [4.6, 2891.0], [4.7, 2892.0], [4.8, 2892.0], [4.9, 2915.0], [5.0, 2915.0], [5.1, 2916.0], [5.2, 2932.0], [5.3, 2932.0], [5.4, 2938.0], [5.5, 2947.0], [5.6, 2951.0], [5.7, 2951.0], [5.8, 2955.0], [5.9, 2962.0], [6.0, 2967.0], [6.1, 2967.0], [6.2, 2972.0], [6.3, 2972.0], [6.4, 2978.0], [6.5, 2978.0], [6.6, 2983.0], [6.7, 3003.0], [6.8, 3003.0], [6.9, 3006.0], [7.0, 3007.0], [7.1, 3011.0], [7.2, 3011.0], [7.3, 3039.0], [7.4, 3043.0], [7.5, 3044.0], [7.6, 3044.0], [7.7, 3046.0], [7.8, 3057.0], [7.9, 3071.0], [8.0, 3071.0], [8.1, 3078.0], [8.2, 3084.0], [8.3, 3094.0], [8.4, 3094.0], [8.5, 3100.0], [8.6, 3104.0], [8.7, 3104.0], [8.8, 3109.0], [8.9, 3112.0], [9.0, 3117.0], [9.1, 3117.0], [9.2, 3117.0], [9.3, 3123.0], [9.4, 3142.0], [9.5, 3142.0], [9.6, 3150.0], [9.7, 3152.0], [9.8, 3155.0], [9.9, 3155.0], [10.0, 3164.0], [10.1, 3174.0], [10.2, 3174.0], [10.3, 3179.0], [10.4, 3184.0], [10.5, 3189.0], [10.6, 3189.0], [10.7, 3189.0], [10.8, 3201.0], [10.9, 3221.0], [11.0, 3221.0], [11.1, 3237.0], [11.2, 3240.0], [11.3, 3240.0], [11.4, 3240.0], [11.5, 3251.0], [11.6, 3270.0], [11.7, 3270.0], [11.8, 3276.0], [11.9, 3279.0], [12.0, 3280.0], [12.1, 3280.0], [12.2, 3304.0], [12.3, 3305.0], [12.4, 3325.0], [12.5, 3325.0], [12.6, 3327.0], [12.7, 3328.0], [12.8, 3330.0], [12.9, 3330.0], [13.0, 3345.0], [13.1, 3350.0], [13.2, 3355.0], [13.3, 3355.0], [13.4, 3356.0], [13.5, 3356.0], [13.6, 3356.0], [13.7, 3360.0], [13.8, 3364.0], [13.9, 3364.0], [14.0, 3364.0], [14.1, 3365.0], [14.2, 3367.0], [14.3, 3367.0], [14.4, 3367.0], [14.5, 3369.0], [14.6, 3371.0], [14.7, 3373.0], [14.8, 3373.0], [14.9, 3375.0], [15.0, 3375.0], [15.1, 3375.0], [15.2, 3388.0], [15.3, 3394.0], [15.4, 3395.0], [15.5, 3395.0], [15.6, 3396.0], [15.7, 3399.0], [15.8, 3440.0], [15.9, 3440.0], [16.0, 3441.0], [16.1, 3442.0], [16.2, 3467.0], [16.3, 3467.0], [16.4, 3471.0], [16.5, 3474.0], [16.6, 3474.0], [16.7, 3474.0], [16.8, 3475.0], [16.9, 3485.0], [17.0, 3485.0], [17.1, 3485.0], [17.2, 3490.0], [17.3, 3490.0], [17.4, 3490.0], [17.5, 3494.0], [17.6, 3496.0], [17.7, 3499.0], [17.8, 3499.0], [17.9, 3503.0], [18.0, 3508.0], [18.1, 3512.0], [18.2, 3512.0], [18.3, 3522.0], [18.4, 3538.0], [18.5, 3538.0], [18.6, 3552.0], [18.7, 3566.0], [18.8, 3572.0], [18.9, 3572.0], [19.0, 3575.0], [19.1, 3579.0], [19.2, 3592.0], [19.3, 3592.0], [19.4, 3598.0], [19.5, 3602.0], [19.6, 3603.0], [19.7, 3603.0], [19.8, 3607.0], [19.9, 3615.0], [20.0, 3621.0], [20.1, 3621.0], [20.2, 3622.0], [20.3, 3622.0], [20.4, 3622.0], [20.5, 3636.0], [20.6, 3641.0], [20.7, 3641.0], [20.8, 3641.0], [20.9, 3647.0], [21.0, 3647.0], [21.1, 3648.0], [21.2, 3648.0], [21.3, 3658.0], [21.4, 3658.0], [21.5, 3660.0], [21.6, 3660.0], [21.7, 3673.0], [21.8, 3678.0], [21.9, 3678.0], [22.0, 3684.0], [22.1, 3690.0], [22.2, 3696.0], [22.3, 3696.0], [22.4, 3698.0], [22.5, 3704.0], [22.6, 3709.0], [22.7, 3709.0], [22.8, 3713.0], [22.9, 3716.0], [23.0, 3717.0], [23.1, 3717.0], [23.2, 3722.0], [23.3, 3730.0], [23.4, 3730.0], [23.5, 3738.0], [23.6, 3750.0], [23.7, 3765.0], [23.8, 3765.0], [23.9, 3769.0], [24.0, 3772.0], [24.1, 3800.0], [24.2, 3800.0], [24.3, 3801.0], [24.4, 3807.0], [24.5, 3811.0], [24.6, 3811.0], [24.7, 3815.0], [24.8, 3816.0], [24.9, 3818.0], [25.0, 3818.0], [25.1, 3824.0], [25.2, 3826.0], [25.3, 3826.0], [25.4, 3831.0], [25.5, 3837.0], [25.6, 3840.0], [25.7, 3840.0], [25.8, 3844.0], [25.9, 3845.0], [26.0, 3845.0], [26.1, 3845.0], [26.2, 3846.0], [26.3, 3849.0], [26.4, 3849.0], [26.5, 3849.0], [26.6, 3855.0], [26.7, 3857.0], [26.8, 3857.0], [26.9, 3860.0], [27.0, 3861.0], [27.1, 3881.0], [27.2, 3881.0], [27.3, 3882.0], [27.4, 3897.0], [27.5, 3904.0], [27.6, 3904.0], [27.7, 3904.0], [27.8, 3906.0], [27.9, 3909.0], [28.0, 3909.0], [28.1, 3913.0], [28.2, 3914.0], [28.3, 3922.0], [28.4, 3922.0], [28.5, 3922.0], [28.6, 3940.0], [28.7, 3940.0], [28.8, 3941.0], [28.9, 3942.0], [29.0, 3944.0], [29.1, 3944.0], [29.2, 3946.0], [29.3, 3950.0], [29.4, 3962.0], [29.5, 3962.0], [29.6, 3962.0], [29.7, 3973.0], [29.8, 3980.0], [29.9, 3980.0], [30.0, 3983.0], [30.1, 3987.0], [30.2, 3987.0], [30.3, 3989.0], [30.4, 3992.0], [30.5, 3994.0], [30.6, 3994.0], [30.7, 4013.0], [30.8, 4020.0], [30.9, 4021.0], [31.0, 4021.0], [31.1, 4025.0], [31.2, 4030.0], [31.3, 4038.0], [31.4, 4038.0], [31.5, 4043.0], [31.6, 4047.0], [31.7, 4047.0], [31.8, 4051.0], [31.9, 4061.0], [32.0, 4070.0], [32.1, 4070.0], [32.2, 4081.0], [32.3, 4085.0], [32.4, 4103.0], [32.5, 4103.0], [32.6, 4118.0], [32.7, 4169.0], [32.8, 4180.0], [32.9, 4180.0], [33.0, 4185.0], [33.1, 4189.0], [33.2, 4205.0], [33.3, 4205.0], [33.4, 4212.0], [33.5, 4216.0], [33.6, 4216.0], [33.7, 4219.0], [33.8, 4224.0], [33.9, 4229.0], [34.0, 4229.0], [34.1, 4246.0], [34.2, 4251.0], [34.3, 4264.0], [34.4, 4264.0], [34.5, 4265.0], [34.6, 4269.0], [34.7, 4274.0], [34.8, 4274.0], [34.9, 4278.0], [35.0, 4280.0], [35.1, 4280.0], [35.2, 4281.0], [35.3, 4283.0], [35.4, 4293.0], [35.5, 4293.0], [35.6, 4299.0], [35.7, 4305.0], [35.8, 4319.0], [35.9, 4319.0], [36.0, 4320.0], [36.1, 4353.0], [36.2, 4361.0], [36.3, 4361.0], [36.4, 4365.0], [36.5, 4383.0], [36.6, 4385.0], [36.7, 4385.0], [36.8, 4386.0], [36.9, 4395.0], [37.0, 4395.0], [37.1, 4398.0], [37.2, 4415.0], [37.3, 4428.0], [37.4, 4428.0], [37.5, 4438.0], [37.6, 4440.0], [37.7, 4442.0], [37.8, 4442.0], [37.9, 4448.0], [38.0, 4448.0], [38.1, 4450.0], [38.2, 4450.0], [38.3, 4451.0], [38.4, 4468.0], [38.5, 4468.0], [38.6, 4479.0], [38.7, 4483.0], [38.8, 4489.0], [38.9, 4489.0], [39.0, 4501.0], [39.1, 4519.0], [39.2, 4533.0], [39.3, 4533.0], [39.4, 4542.0], [39.5, 4542.0], [39.6, 4552.0], [39.7, 4552.0], [39.8, 4562.0], [39.9, 4564.0], [40.0, 4564.0], [40.1, 4564.0], [40.2, 4566.0], [40.3, 4567.0], [40.4, 4567.0], [40.5, 4568.0], [40.6, 4569.0], [40.7, 4570.0], [40.8, 4570.0], [40.9, 4577.0], [41.0, 4578.0], [41.1, 4582.0], [41.2, 4582.0], [41.3, 4598.0], [41.4, 4608.0], [41.5, 4609.0], [41.6, 4609.0], [41.7, 4610.0], [41.8, 4614.0], [41.9, 4614.0], [42.0, 4615.0], [42.1, 4619.0], [42.2, 4620.0], [42.3, 4620.0], [42.4, 4622.0], [42.5, 4623.0], [42.6, 4624.0], [42.7, 4624.0], [42.8, 4625.0], [42.9, 4625.0], [43.0, 4629.0], [43.1, 4629.0], [43.2, 4631.0], [43.3, 4632.0], [43.4, 4632.0], [43.5, 4636.0], [43.6, 4639.0], [43.7, 4642.0], [43.8, 4642.0], [43.9, 4651.0], [44.0, 4653.0], [44.1, 4682.0], [44.2, 4682.0], [44.3, 4686.0], [44.4, 4691.0], [44.5, 4691.0], [44.6, 4691.0], [44.7, 4694.0], [44.8, 4699.0], [44.9, 4709.0], [45.0, 4709.0], [45.1, 4713.0], [45.2, 4714.0], [45.3, 4714.0], [45.4, 4728.0], [45.5, 4734.0], [45.6, 4736.0], [45.7, 4736.0], [45.8, 4743.0], [45.9, 4747.0], [46.0, 4758.0], [46.1, 4758.0], [46.2, 4763.0], [46.3, 4769.0], [46.4, 4770.0], [46.5, 4770.0], [46.6, 4772.0], [46.7, 4772.0], [46.8, 4772.0], [46.9, 4773.0], [47.0, 4774.0], [47.1, 4777.0], [47.2, 4777.0], [47.3, 4778.0], [47.4, 4778.0], [47.5, 4780.0], [47.6, 4780.0], [47.7, 4781.0], [47.8, 4789.0], [47.9, 4790.0], [48.0, 4790.0], [48.1, 4791.0], [48.2, 4796.0], [48.3, 4797.0], [48.4, 4797.0], [48.5, 4798.0], [48.6, 4801.0], [48.7, 4801.0], [48.8, 4803.0], [48.9, 4804.0], [49.0, 4807.0], [49.1, 4807.0], [49.2, 4811.0], [49.3, 4812.0], [49.4, 4816.0], [49.5, 4816.0], [49.6, 4816.0], [49.7, 4819.0], [49.8, 4821.0], [49.9, 4821.0], [50.0, 4826.0], [50.1, 4826.0], [50.2, 4826.0], [50.3, 4830.0], [50.4, 4830.0], [50.5, 4830.0], [50.6, 4830.0], [50.7, 4831.0], [50.8, 4838.0], [50.9, 4839.0], [51.0, 4839.0], [51.1, 4848.0], [51.2, 4853.0], [51.3, 4861.0], [51.4, 4861.0], [51.5, 4864.0], [51.6, 4872.0], [51.7, 4872.0], [51.8, 4876.0], [51.9, 4882.0], [52.0, 4883.0], [52.1, 4883.0], [52.2, 4884.0], [52.3, 4886.0], [52.4, 4889.0], [52.5, 4889.0], [52.6, 4893.0], [52.7, 4895.0], [52.8, 4898.0], [52.9, 4898.0], [53.0, 4901.0], [53.1, 4904.0], [53.2, 4907.0], [53.3, 4907.0], [53.4, 4908.0], [53.5, 4910.0], [53.6, 4910.0], [53.7, 4914.0], [53.8, 4915.0], [53.9, 4921.0], [54.0, 4921.0], [54.1, 4922.0], [54.2, 4925.0], [54.3, 4929.0], [54.4, 4929.0], [54.5, 4932.0], [54.6, 4932.0], [54.7, 4935.0], [54.8, 4935.0], [54.9, 4938.0], [55.0, 4938.0], [55.1, 4938.0], [55.2, 4953.0], [55.3, 4956.0], [55.4, 4956.0], [55.5, 4956.0], [55.6, 4960.0], [55.7, 4960.0], [55.8, 4960.0], [55.9, 4960.0], [56.0, 4962.0], [56.1, 4962.0], [56.2, 4965.0], [56.3, 4965.0], [56.4, 4965.0], [56.5, 4969.0], [56.6, 4970.0], [56.7, 4970.0], [56.8, 4971.0], [56.9, 4972.0], [57.0, 4972.0], [57.1, 4974.0], [57.2, 4980.0], [57.3, 4986.0], [57.4, 4986.0], [57.5, 4987.0], [57.6, 4989.0], [57.7, 4989.0], [57.8, 4989.0], [57.9, 4989.0], [58.0, 4991.0], [58.1, 4992.0], [58.2, 4992.0], [58.3, 4993.0], [58.4, 4998.0], [58.5, 4998.0], [58.6, 4999.0], [58.7, 5003.0], [58.8, 5006.0], [58.9, 5006.0], [59.0, 5009.0], [59.1, 5011.0], [59.2, 5011.0], [59.3, 5011.0], [59.4, 5012.0], [59.5, 5013.0], [59.6, 5014.0], [59.7, 5014.0], [59.8, 5014.0], [59.9, 5015.0], [60.0, 5021.0], [60.1, 5021.0], [60.2, 5022.0], [60.3, 5027.0], [60.4, 5027.0], [60.5, 5029.0], [60.6, 5032.0], [60.7, 5032.0], [60.8, 5032.0], [60.9, 5033.0], [61.0, 5038.0], [61.1, 5039.0], [61.2, 5039.0], [61.3, 5039.0], [61.4, 5047.0], [61.5, 5047.0], [61.6, 5047.0], [61.7, 5050.0], [61.8, 5051.0], [61.9, 5051.0], [62.0, 5056.0], [62.1, 5056.0], [62.2, 5062.0], [62.3, 5062.0], [62.4, 5063.0], [62.5, 5063.0], [62.6, 5064.0], [62.7, 5064.0], [62.8, 5066.0], [62.9, 5075.0], [63.0, 5078.0], [63.1, 5078.0], [63.2, 5078.0], [63.3, 5079.0], [63.4, 5079.0], [63.5, 5086.0], [63.6, 5091.0], [63.7, 5093.0], [63.8, 5093.0], [63.9, 5100.0], [64.0, 5102.0], [64.1, 5107.0], [64.2, 5107.0], [64.3, 5110.0], [64.4, 5110.0], [64.5, 5114.0], [64.6, 5114.0], [64.7, 5114.0], [64.8, 5115.0], [64.9, 5116.0], [65.0, 5116.0], [65.1, 5120.0], [65.2, 5120.0], [65.3, 5120.0], [65.4, 5122.0], [65.5, 5124.0], [65.6, 5125.0], [65.7, 5125.0], [65.8, 5128.0], [65.9, 5130.0], [66.0, 5131.0], [66.1, 5131.0], [66.2, 5131.0], [66.3, 5135.0], [66.4, 5135.0], [66.5, 5135.0], [66.6, 5136.0], [66.7, 5139.0], [66.8, 5139.0], [66.9, 5144.0], [67.0, 5145.0], [67.1, 5146.0], [67.2, 5146.0], [67.3, 5147.0], [67.4, 5147.0], [67.5, 5147.0], [67.6, 5147.0], [67.7, 5149.0], [67.8, 5155.0], [67.9, 5161.0], [68.0, 5161.0], [68.1, 5161.0], [68.2, 5163.0], [68.3, 5164.0], [68.4, 5164.0], [68.5, 5166.0], [68.6, 5167.0], [68.7, 5167.0], [68.8, 5167.0], [68.9, 5170.0], [69.0, 5177.0], [69.1, 5177.0], [69.2, 5177.0], [69.3, 5178.0], [69.4, 5182.0], [69.5, 5182.0], [69.6, 5193.0], [69.7, 5193.0], [69.8, 5200.0], [69.9, 5200.0], [70.0, 5203.0], [70.1, 5209.0], [70.2, 5209.0], [70.3, 5211.0], [70.4, 5211.0], [70.5, 5212.0], [70.6, 5212.0], [70.7, 5217.0], [70.8, 5218.0], [70.9, 5219.0], [71.0, 5219.0], [71.1, 5219.0], [71.2, 5220.0], [71.3, 5223.0], [71.4, 5223.0], [71.5, 5226.0], [71.6, 5227.0], [71.7, 5227.0], [71.8, 5228.0], [71.9, 5229.0], [72.0, 5231.0], [72.1, 5231.0], [72.2, 5232.0], [72.3, 5233.0], [72.4, 5234.0], [72.5, 5234.0], [72.6, 5236.0], [72.7, 5243.0], [72.8, 5244.0], [72.9, 5244.0], [73.0, 5245.0], [73.1, 5246.0], [73.2, 5247.0], [73.3, 5247.0], [73.4, 5249.0], [73.5, 5250.0], [73.6, 5250.0], [73.7, 5251.0], [73.8, 5253.0], [73.9, 5254.0], [74.0, 5254.0], [74.1, 5256.0], [74.2, 5256.0], [74.3, 5259.0], [74.4, 5259.0], [74.5, 5259.0], [74.6, 5261.0], [74.7, 5263.0], [74.8, 5263.0], [74.9, 5267.0], [75.0, 5268.0], [75.1, 5268.0], [75.2, 5271.0], [75.3, 5279.0], [75.4, 5279.0], [75.5, 5279.0], [75.6, 5280.0], [75.7, 5282.0], [75.8, 5282.0], [75.9, 5282.0], [76.0, 5283.0], [76.1, 5285.0], [76.2, 5287.0], [76.3, 5287.0], [76.4, 5292.0], [76.5, 5294.0], [76.6, 5298.0], [76.7, 5298.0], [76.8, 5299.0], [76.9, 5304.0], [77.0, 5304.0], [77.1, 5306.0], [77.2, 5310.0], [77.3, 5314.0], [77.4, 5314.0], [77.5, 5316.0], [77.6, 5316.0], [77.7, 5318.0], [77.8, 5318.0], [77.9, 5321.0], [78.0, 5323.0], [78.1, 5335.0], [78.2, 5335.0], [78.3, 5340.0], [78.4, 5342.0], [78.5, 5342.0], [78.6, 5342.0], [78.7, 5348.0], [78.8, 5349.0], [78.9, 5349.0], [79.0, 5350.0], [79.1, 5352.0], [79.2, 5353.0], [79.3, 5353.0], [79.4, 5357.0], [79.5, 5362.0], [79.6, 5364.0], [79.7, 5364.0], [79.8, 5365.0], [79.9, 5373.0], [80.0, 5374.0], [80.1, 5374.0], [80.2, 5377.0], [80.3, 5386.0], [80.4, 5386.0], [80.5, 5388.0], [80.6, 5388.0], [80.7, 5394.0], [80.8, 5394.0], [80.9, 5397.0], [81.0, 5400.0], [81.1, 5401.0], [81.2, 5401.0], [81.3, 5402.0], [81.4, 5404.0], [81.5, 5410.0], [81.6, 5410.0], [81.7, 5415.0], [81.8, 5416.0], [81.9, 5416.0], [82.0, 5419.0], [82.1, 5419.0], [82.2, 5420.0], [82.3, 5420.0], [82.4, 5425.0], [82.5, 5432.0], [82.6, 5438.0], [82.7, 5438.0], [82.8, 5440.0], [82.9, 5445.0], [83.0, 5453.0], [83.1, 5453.0], [83.2, 5455.0], [83.3, 5456.0], [83.4, 5456.0], [83.5, 5470.0], [83.6, 5474.0], [83.7, 5475.0], [83.8, 5475.0], [83.9, 5487.0], [84.0, 5490.0], [84.1, 5494.0], [84.2, 5494.0], [84.3, 5495.0], [84.4, 5495.0], [84.5, 5496.0], [84.6, 5496.0], [84.7, 5509.0], [84.8, 5522.0], [84.9, 5524.0], [85.0, 5524.0], [85.1, 5528.0], [85.2, 5530.0], [85.3, 5530.0], [85.4, 5531.0], [85.5, 5531.0], [85.6, 5532.0], [85.7, 5532.0], [85.8, 5536.0], [85.9, 5553.0], [86.0, 5563.0], [86.1, 5563.0], [86.2, 5571.0], [86.3, 5580.0], [86.4, 5581.0], [86.5, 5581.0], [86.6, 5590.0], [86.7, 5608.0], [86.8, 5608.0], [86.9, 5616.0], [87.0, 5622.0], [87.1, 5629.0], [87.2, 5629.0], [87.3, 5637.0], [87.4, 5640.0], [87.5, 5645.0], [87.6, 5645.0], [87.7, 5646.0], [87.8, 5656.0], [87.9, 5658.0], [88.0, 5658.0], [88.1, 5671.0], [88.2, 5680.0], [88.3, 5732.0], [88.4, 5732.0], [88.5, 5753.0], [88.6, 5755.0], [88.7, 5755.0], [88.8, 5756.0], [88.9, 5789.0], [89.0, 5798.0], [89.1, 5798.0], [89.2, 5800.0], [89.3, 5808.0], [89.4, 5827.0], [89.5, 5827.0], [89.6, 5837.0], [89.7, 5844.0], [89.8, 5866.0], [89.9, 5866.0], [90.0, 5894.0], [90.1, 5903.0], [90.2, 5903.0], [90.3, 5907.0], [90.4, 5917.0], [90.5, 5920.0], [90.6, 5920.0], [90.7, 5934.0], [90.8, 5946.0], [90.9, 5972.0], [91.0, 5972.0], [91.1, 5983.0], [91.2, 5983.0], [91.3, 5996.0], [91.4, 5996.0], [91.5, 6019.0], [91.6, 6033.0], [91.7, 6033.0], [91.8, 6065.0], [91.9, 6096.0], [92.0, 6136.0], [92.1, 6136.0], [92.2, 6148.0], [92.3, 6160.0], [92.4, 6248.0], [92.5, 6248.0], [92.6, 6249.0], [92.7, 6303.0], [92.8, 6365.0], [92.9, 6365.0], [93.0, 6387.0], [93.1, 6394.0], [93.2, 6404.0], [93.3, 6404.0], [93.4, 6436.0], [93.5, 6453.0], [93.6, 6453.0], [93.7, 6456.0], [93.8, 6490.0], [93.9, 6504.0], [94.0, 6504.0], [94.1, 6506.0], [94.2, 6528.0], [94.3, 6534.0], [94.4, 6534.0], [94.5, 6538.0], [94.6, 6574.0], [94.7, 6599.0], [94.8, 6599.0], [94.9, 6611.0], [95.0, 6633.0], [95.1, 6633.0], [95.2, 6699.0], [95.3, 6738.0], [95.4, 6776.0], [95.5, 6776.0], [95.6, 6856.0], [95.7, 6859.0], [95.8, 6884.0], [95.9, 6884.0], [96.0, 6920.0], [96.1, 6946.0], [96.2, 6948.0], [96.3, 6948.0], [96.4, 6955.0], [96.5, 6966.0], [96.6, 6984.0], [96.7, 6984.0], [96.8, 6986.0], [96.9, 7042.0], [97.0, 7042.0], [97.1, 7053.0], [97.2, 7068.0], [97.3, 7072.0], [97.4, 7072.0], [97.5, 7081.0], [97.6, 7083.0], [97.7, 7133.0], [97.8, 7133.0], [97.9, 7146.0], [98.0, 7159.0], [98.1, 7161.0], [98.2, 7161.0], [98.3, 7212.0], [98.4, 7228.0], [98.5, 7228.0], [98.6, 7320.0], [98.7, 7359.0], [98.8, 7426.0], [98.9, 7426.0], [99.0, 7439.0], [99.1, 7466.0], [99.2, 7471.0], [99.3, 7471.0], [99.4, 7491.0], [99.5, 7495.0], [99.6, 7626.0], [99.7, 7626.0], [99.8, 7733.0], [99.9, 7777.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2000.0, "maxY": 52.0, "series": [{"data": [[2000.0, 3.0], [2100.0, 1.0], [2400.0, 1.0], [2500.0, 5.0], [2600.0, 12.0], [2700.0, 6.0], [2800.0, 8.0], [2900.0, 13.0], [3000.0, 13.0], [3100.0, 17.0], [3300.0, 27.0], [3200.0, 10.0], [3400.0, 15.0], [3500.0, 12.0], [3600.0, 22.0], [3700.0, 12.0], [3800.0, 25.0], [3900.0, 23.0], [4000.0, 13.0], [4300.0, 11.0], [4200.0, 18.0], [4100.0, 6.0], [4600.0, 26.0], [4500.0, 18.0], [4400.0, 13.0], [4700.0, 27.0], [4800.0, 32.0], [5100.0, 44.0], [4900.0, 42.0], [5000.0, 38.0], [5300.0, 30.0], [5200.0, 52.0], [5400.0, 27.0], [5500.0, 15.0], [5600.0, 12.0], [5800.0, 7.0], [5700.0, 6.0], [5900.0, 10.0], [6100.0, 3.0], [6000.0, 4.0], [6300.0, 4.0], [6200.0, 2.0], [6500.0, 7.0], [6400.0, 5.0], [6600.0, 3.0], [6800.0, 3.0], [6900.0, 7.0], [6700.0, 2.0], [7100.0, 4.0], [7000.0, 6.0], [7300.0, 2.0], [7400.0, 6.0], [7200.0, 2.0], [7600.0, 1.0], [7700.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.631147540983605, "minX": 1.60404726E12, "maxY": 10.0, "series": [{"data": [[1.60404732E12, 10.0], [1.6040475E12, 10.0], [1.60404744E12, 10.0], [1.60404756E12, 9.631147540983605], [1.60404726E12, 10.0], [1.60404738E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404756E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3179.0, "minX": 1.0, "maxY": 4674.371900826449, "series": [{"data": [[8.0, 3221.0], [4.0, 3373.0], [2.0, 3375.0], [1.0, 3811.0], [9.0, 3179.0], [10.0, 4674.371900826449], [5.0, 3375.0], [6.0, 3279.0], [3.0, 3367.0], [7.0, 3237.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 4658.246258503404]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 780.2833333333333, "minX": 1.60404726E12, "maxY": 391022.35, "series": [{"data": [[1.60404732E12, 275515.43333333335], [1.6040475E12, 276086.63333333336], [1.60404744E12, 314928.61666666664], [1.60404756E12, 254014.76666666666], [1.60404726E12, 391022.35], [1.60404738E12, 324217.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60404732E12, 892.1166666666667], [1.6040475E12, 892.45], [1.60404744E12, 954.1166666666667], [1.60404756E12, 907.1666666666666], [1.60404726E12, 780.2833333333333], [1.60404738E12, 1096.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404756E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4003.9931972789113, "minX": 1.60404726E12, "maxY": 5131.14406779661, "series": [{"data": [[1.60404732E12, 5102.584745762712], [1.6040475E12, 5131.14406779661], [1.60404744E12, 4781.448818897638], [1.60404756E12, 4114.967213114754], [1.60404726E12, 5032.757281553399], [1.60404738E12, 4003.9931972789113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404756E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4002.870748299319, "minX": 1.60404726E12, "maxY": 5129.974576271189, "series": [{"data": [[1.60404732E12, 5101.381355932203], [1.6040475E12, 5129.974576271189], [1.60404744E12, 4780.2283464566935], [1.60404756E12, 4113.950819672129], [1.60404726E12, 5030.961165048544], [1.60404738E12, 4002.870748299319]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404756E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.10169491525423735, "minX": 1.60404726E12, "maxY": 1.223300970873787, "series": [{"data": [[1.60404732E12, 0.1271186440677967], [1.6040475E12, 0.10169491525423735], [1.60404744E12, 0.125984251968504], [1.60404756E12, 0.10655737704918038], [1.60404726E12, 1.223300970873787], [1.60404738E12, 0.11564625850340131]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404756E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2004.0, "minX": 1.60404726E12, "maxY": 7777.0, "series": [{"data": [[1.60404732E12, 5656.0], [1.6040475E12, 5680.0], [1.60404744E12, 7228.0], [1.60404756E12, 6504.0], [1.60404726E12, 7777.0], [1.60404738E12, 5373.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60404732E12, 3942.490999404192], [1.6040475E12, 4385.070999971628], [1.60404744E12, 2516.8319972229006], [1.60404756E12, 2722.9629997360707], [1.60404726E12, 2583.0], [1.60404738E12, 2007.6519996118545]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60404732E12, 3944.740100238323], [1.6040475E12, 4385.178100011349], [1.60404744E12, 2527.31520111084], [1.60404756E12, 2723.959300105572], [1.60404726E12, 2583.7696002578737], [1.60404738E12, 2009.1172001552582]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60404732E12, 3943.740499702096], [1.6040475E12, 4385.130499985814], [1.60404744E12, 2522.6559986114503], [1.60404756E12, 2723.516499868035], [1.60404726E12, 2583.0], [1.60404738E12, 2008.4659998059274]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60404732E12, 3941.0], [1.6040475E12, 4385.0], [1.60404744E12, 2503.0], [1.60404756E12, 2722.0], [1.60404726E12, 2583.0], [1.60404738E12, 2004.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60404732E12, 5140.0], [1.6040475E12, 5135.5], [1.60404744E12, 4709.0], [1.60404756E12, 3956.0], [1.60404726E12, 4747.0], [1.60404738E12, 3909.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404756E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3220.5, "minX": 1.0, "maxY": 5167.0, "series": [{"data": [[1.0, 5167.0], [2.0, 5039.5], [4.0, 3220.5], [5.0, 3897.0], [3.0, 4566.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3220.5, "minX": 1.0, "maxY": 5165.0, "series": [{"data": [[1.0, 5165.0], [2.0, 5039.0], [4.0, 3220.5], [5.0, 3897.0], [3.0, 4565.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60404726E12, "maxY": 2.45, "series": [{"data": [[1.60404732E12, 1.9666666666666666], [1.6040475E12, 1.9666666666666666], [1.60404744E12, 2.1166666666666667], [1.60404756E12, 1.8666666666666667], [1.60404726E12, 1.8833333333333333], [1.60404738E12, 2.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404756E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60404726E12, "maxY": 2.45, "series": [{"data": [[1.60404732E12, 1.9666666666666666], [1.6040475E12, 1.9666666666666666], [1.60404744E12, 2.1166666666666667], [1.60404756E12, 2.033333333333333], [1.60404726E12, 1.7166666666666666], [1.60404738E12, 2.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404756E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60404726E12, "maxY": 2.45, "series": [{"data": [[1.60404732E12, 1.9666666666666666], [1.6040475E12, 1.9666666666666666], [1.60404744E12, 2.1166666666666667], [1.60404756E12, 2.033333333333333], [1.60404726E12, 1.7166666666666666], [1.60404738E12, 2.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404756E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60404726E12, "maxY": 2.45, "series": [{"data": [[1.60404732E12, 1.9666666666666666], [1.6040475E12, 1.9666666666666666], [1.60404744E12, 2.1166666666666667], [1.60404756E12, 2.033333333333333], [1.60404726E12, 1.7166666666666666], [1.60404738E12, 2.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404756E12, "title": "Total Transactions Per Second"}},
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

