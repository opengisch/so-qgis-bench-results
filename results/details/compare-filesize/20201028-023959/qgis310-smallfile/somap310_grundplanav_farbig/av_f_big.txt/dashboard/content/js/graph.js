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
        data: {"result": {"minY": 1996.0, "minX": 0.0, "maxY": 7560.0, "series": [{"data": [[0.0, 1996.0], [0.1, 1996.0], [0.2, 2016.0], [0.3, 2089.0], [0.4, 2089.0], [0.5, 2133.0], [0.6, 2415.0], [0.7, 2443.0], [0.8, 2443.0], [0.9, 2464.0], [1.0, 2495.0], [1.1, 2529.0], [1.2, 2529.0], [1.3, 2569.0], [1.4, 2579.0], [1.5, 2581.0], [1.6, 2581.0], [1.7, 2593.0], [1.8, 2597.0], [1.9, 2597.0], [2.0, 2615.0], [2.1, 2621.0], [2.2, 2630.0], [2.3, 2630.0], [2.4, 2633.0], [2.5, 2657.0], [2.6, 2676.0], [2.7, 2676.0], [2.8, 2703.0], [2.9, 2717.0], [3.0, 2725.0], [3.1, 2725.0], [3.2, 2726.0], [3.3, 2737.0], [3.4, 2737.0], [3.5, 2775.0], [3.6, 2776.0], [3.7, 2781.0], [3.8, 2781.0], [3.9, 2785.0], [4.0, 2799.0], [4.1, 2801.0], [4.2, 2801.0], [4.3, 2812.0], [4.4, 2819.0], [4.5, 2822.0], [4.6, 2822.0], [4.7, 2824.0], [4.8, 2835.0], [4.9, 2842.0], [5.0, 2842.0], [5.1, 2846.0], [5.2, 2847.0], [5.3, 2847.0], [5.4, 2856.0], [5.5, 2860.0], [5.6, 2864.0], [5.7, 2864.0], [5.8, 2866.0], [5.9, 2873.0], [6.0, 2875.0], [6.1, 2875.0], [6.2, 2876.0], [6.3, 2877.0], [6.4, 2887.0], [6.5, 2887.0], [6.6, 2894.0], [6.7, 2897.0], [6.8, 2897.0], [6.9, 2906.0], [7.0, 2911.0], [7.1, 2915.0], [7.2, 2915.0], [7.3, 2926.0], [7.4, 2933.0], [7.5, 2939.0], [7.6, 2939.0], [7.7, 2942.0], [7.8, 2950.0], [7.9, 2954.0], [8.0, 2954.0], [8.1, 2955.0], [8.2, 2965.0], [8.3, 2968.0], [8.4, 2968.0], [8.5, 2984.0], [8.6, 2996.0], [8.7, 2996.0], [8.8, 3003.0], [8.9, 3004.0], [9.0, 3006.0], [9.1, 3006.0], [9.2, 3025.0], [9.3, 3031.0], [9.4, 3036.0], [9.5, 3036.0], [9.6, 3040.0], [9.7, 3040.0], [9.8, 3046.0], [9.9, 3046.0], [10.0, 3055.0], [10.1, 3055.0], [10.2, 3055.0], [10.3, 3064.0], [10.4, 3071.0], [10.5, 3076.0], [10.6, 3076.0], [10.7, 3078.0], [10.8, 3093.0], [10.9, 3103.0], [11.0, 3103.0], [11.1, 3110.0], [11.2, 3115.0], [11.3, 3115.0], [11.4, 3115.0], [11.5, 3121.0], [11.6, 3122.0], [11.7, 3122.0], [11.8, 3131.0], [11.9, 3141.0], [12.0, 3145.0], [12.1, 3145.0], [12.2, 3146.0], [12.3, 3155.0], [12.4, 3160.0], [12.5, 3160.0], [12.6, 3171.0], [12.7, 3173.0], [12.8, 3174.0], [12.9, 3174.0], [13.0, 3181.0], [13.1, 3190.0], [13.2, 3190.0], [13.3, 3190.0], [13.4, 3196.0], [13.5, 3196.0], [13.6, 3196.0], [13.7, 3201.0], [13.8, 3201.0], [13.9, 3205.0], [14.0, 3205.0], [14.1, 3216.0], [14.2, 3216.0], [14.3, 3218.0], [14.4, 3218.0], [14.5, 3221.0], [14.6, 3226.0], [14.7, 3226.0], [14.8, 3226.0], [14.9, 3227.0], [15.0, 3231.0], [15.1, 3231.0], [15.2, 3236.0], [15.3, 3237.0], [15.4, 3237.0], [15.5, 3237.0], [15.6, 3238.0], [15.7, 3241.0], [15.8, 3242.0], [15.9, 3242.0], [16.0, 3245.0], [16.1, 3265.0], [16.2, 3281.0], [16.3, 3281.0], [16.4, 3285.0], [16.5, 3287.0], [16.6, 3294.0], [16.7, 3294.0], [16.8, 3305.0], [16.9, 3318.0], [17.0, 3318.0], [17.1, 3328.0], [17.2, 3330.0], [17.3, 3341.0], [17.4, 3341.0], [17.5, 3342.0], [17.6, 3346.0], [17.7, 3369.0], [17.8, 3369.0], [17.9, 3370.0], [18.0, 3377.0], [18.1, 3381.0], [18.2, 3381.0], [18.3, 3381.0], [18.4, 3384.0], [18.5, 3384.0], [18.6, 3397.0], [18.7, 3400.0], [18.8, 3405.0], [18.9, 3405.0], [19.0, 3426.0], [19.1, 3434.0], [19.2, 3449.0], [19.3, 3449.0], [19.4, 3460.0], [19.5, 3468.0], [19.6, 3481.0], [19.7, 3481.0], [19.8, 3488.0], [19.9, 3490.0], [20.0, 3490.0], [20.1, 3492.0], [20.2, 3497.0], [20.3, 3503.0], [20.4, 3503.0], [20.5, 3504.0], [20.6, 3508.0], [20.7, 3512.0], [20.8, 3512.0], [20.9, 3523.0], [21.0, 3527.0], [21.1, 3542.0], [21.2, 3542.0], [21.3, 3549.0], [21.4, 3559.0], [21.5, 3567.0], [21.6, 3567.0], [21.7, 3567.0], [21.8, 3572.0], [21.9, 3572.0], [22.0, 3572.0], [22.1, 3575.0], [22.2, 3577.0], [22.3, 3577.0], [22.4, 3579.0], [22.5, 3582.0], [22.6, 3585.0], [22.7, 3585.0], [22.8, 3594.0], [22.9, 3595.0], [23.0, 3597.0], [23.1, 3597.0], [23.2, 3602.0], [23.3, 3609.0], [23.4, 3609.0], [23.5, 3618.0], [23.6, 3624.0], [23.7, 3631.0], [23.8, 3631.0], [23.9, 3653.0], [24.0, 3653.0], [24.1, 3656.0], [24.2, 3656.0], [24.3, 3663.0], [24.4, 3668.0], [24.5, 3675.0], [24.6, 3675.0], [24.7, 3679.0], [24.8, 3684.0], [24.9, 3684.0], [25.0, 3684.0], [25.1, 3688.0], [25.2, 3697.0], [25.3, 3697.0], [25.4, 3700.0], [25.5, 3702.0], [25.6, 3703.0], [25.7, 3703.0], [25.8, 3705.0], [25.9, 3708.0], [26.0, 3720.0], [26.1, 3720.0], [26.2, 3726.0], [26.3, 3731.0], [26.4, 3733.0], [26.5, 3733.0], [26.6, 3739.0], [26.7, 3743.0], [26.8, 3743.0], [26.9, 3743.0], [27.0, 3743.0], [27.1, 3745.0], [27.2, 3745.0], [27.3, 3747.0], [27.4, 3752.0], [27.5, 3758.0], [27.6, 3758.0], [27.7, 3760.0], [27.8, 3761.0], [27.9, 3774.0], [28.0, 3774.0], [28.1, 3781.0], [28.2, 3786.0], [28.3, 3799.0], [28.4, 3799.0], [28.5, 3816.0], [28.6, 3817.0], [28.7, 3817.0], [28.8, 3818.0], [28.9, 3826.0], [29.0, 3832.0], [29.1, 3832.0], [29.2, 3832.0], [29.3, 3837.0], [29.4, 3858.0], [29.5, 3858.0], [29.6, 3859.0], [29.7, 3869.0], [29.8, 3869.0], [29.9, 3869.0], [30.0, 3872.0], [30.1, 3872.0], [30.2, 3872.0], [30.3, 3875.0], [30.4, 3878.0], [30.5, 3886.0], [30.6, 3886.0], [30.7, 3888.0], [30.8, 3893.0], [30.9, 3898.0], [31.0, 3898.0], [31.1, 3904.0], [31.2, 3919.0], [31.3, 3953.0], [31.4, 3953.0], [31.5, 3957.0], [31.6, 3973.0], [31.7, 3973.0], [31.8, 3973.0], [31.9, 3982.0], [32.0, 3988.0], [32.1, 3988.0], [32.2, 3992.0], [32.3, 3993.0], [32.4, 4002.0], [32.5, 4002.0], [32.6, 4008.0], [32.7, 4010.0], [32.8, 4012.0], [32.9, 4012.0], [33.0, 4013.0], [33.1, 4019.0], [33.2, 4020.0], [33.3, 4020.0], [33.4, 4037.0], [33.5, 4043.0], [33.6, 4043.0], [33.7, 4053.0], [33.8, 4062.0], [33.9, 4063.0], [34.0, 4063.0], [34.1, 4063.0], [34.2, 4063.0], [34.3, 4079.0], [34.4, 4079.0], [34.5, 4093.0], [34.6, 4127.0], [34.7, 4131.0], [34.8, 4131.0], [34.9, 4134.0], [35.0, 4142.0], [35.1, 4142.0], [35.2, 4146.0], [35.3, 4156.0], [35.4, 4165.0], [35.5, 4165.0], [35.6, 4176.0], [35.7, 4184.0], [35.8, 4192.0], [35.9, 4192.0], [36.0, 4198.0], [36.1, 4202.0], [36.2, 4204.0], [36.3, 4204.0], [36.4, 4207.0], [36.5, 4210.0], [36.6, 4217.0], [36.7, 4217.0], [36.8, 4222.0], [36.9, 4236.0], [37.0, 4236.0], [37.1, 4236.0], [37.2, 4237.0], [37.3, 4238.0], [37.4, 4238.0], [37.5, 4243.0], [37.6, 4247.0], [37.7, 4248.0], [37.8, 4248.0], [37.9, 4255.0], [38.0, 4256.0], [38.1, 4256.0], [38.2, 4256.0], [38.3, 4264.0], [38.4, 4267.0], [38.5, 4267.0], [38.6, 4272.0], [38.7, 4279.0], [38.8, 4285.0], [38.9, 4285.0], [39.0, 4287.0], [39.1, 4289.0], [39.2, 4293.0], [39.3, 4293.0], [39.4, 4300.0], [39.5, 4303.0], [39.6, 4305.0], [39.7, 4305.0], [39.8, 4306.0], [39.9, 4307.0], [40.0, 4311.0], [40.1, 4311.0], [40.2, 4320.0], [40.3, 4320.0], [40.4, 4320.0], [40.5, 4325.0], [40.6, 4327.0], [40.7, 4327.0], [40.8, 4327.0], [40.9, 4333.0], [41.0, 4336.0], [41.1, 4339.0], [41.2, 4339.0], [41.3, 4342.0], [41.4, 4343.0], [41.5, 4356.0], [41.6, 4356.0], [41.7, 4378.0], [41.8, 4406.0], [41.9, 4406.0], [42.0, 4410.0], [42.1, 4414.0], [42.2, 4417.0], [42.3, 4417.0], [42.4, 4421.0], [42.5, 4427.0], [42.6, 4439.0], [42.7, 4439.0], [42.8, 4449.0], [42.9, 4449.0], [43.0, 4452.0], [43.1, 4452.0], [43.2, 4456.0], [43.3, 4462.0], [43.4, 4462.0], [43.5, 4467.0], [43.6, 4468.0], [43.7, 4470.0], [43.8, 4470.0], [43.9, 4471.0], [44.0, 4474.0], [44.1, 4475.0], [44.2, 4475.0], [44.3, 4475.0], [44.4, 4476.0], [44.5, 4479.0], [44.6, 4479.0], [44.7, 4479.0], [44.8, 4482.0], [44.9, 4486.0], [45.0, 4486.0], [45.1, 4495.0], [45.2, 4497.0], [45.3, 4497.0], [45.4, 4500.0], [45.5, 4502.0], [45.6, 4503.0], [45.7, 4503.0], [45.8, 4505.0], [45.9, 4505.0], [46.0, 4518.0], [46.1, 4518.0], [46.2, 4525.0], [46.3, 4528.0], [46.4, 4530.0], [46.5, 4530.0], [46.6, 4537.0], [46.7, 4538.0], [46.8, 4538.0], [46.9, 4549.0], [47.0, 4557.0], [47.1, 4558.0], [47.2, 4558.0], [47.3, 4565.0], [47.4, 4570.0], [47.5, 4573.0], [47.6, 4573.0], [47.7, 4575.0], [47.8, 4581.0], [47.9, 4582.0], [48.0, 4582.0], [48.1, 4586.0], [48.2, 4596.0], [48.3, 4599.0], [48.4, 4599.0], [48.5, 4600.0], [48.6, 4604.0], [48.7, 4604.0], [48.8, 4607.0], [48.9, 4617.0], [49.0, 4618.0], [49.1, 4618.0], [49.2, 4621.0], [49.3, 4625.0], [49.4, 4629.0], [49.5, 4629.0], [49.6, 4631.0], [49.7, 4632.0], [49.8, 4633.0], [49.9, 4633.0], [50.0, 4635.0], [50.1, 4635.0], [50.2, 4635.0], [50.3, 4635.0], [50.4, 4639.0], [50.5, 4639.0], [50.6, 4639.0], [50.7, 4647.0], [50.8, 4652.0], [50.9, 4655.0], [51.0, 4655.0], [51.1, 4658.0], [51.2, 4661.0], [51.3, 4664.0], [51.4, 4664.0], [51.5, 4666.0], [51.6, 4666.0], [51.7, 4666.0], [51.8, 4667.0], [51.9, 4671.0], [52.0, 4683.0], [52.1, 4683.0], [52.2, 4683.0], [52.3, 4688.0], [52.4, 4690.0], [52.5, 4690.0], [52.6, 4694.0], [52.7, 4696.0], [52.8, 4697.0], [52.9, 4697.0], [53.0, 4700.0], [53.1, 4701.0], [53.2, 4703.0], [53.3, 4703.0], [53.4, 4704.0], [53.5, 4715.0], [53.6, 4715.0], [53.7, 4721.0], [53.8, 4723.0], [53.9, 4724.0], [54.0, 4724.0], [54.1, 4724.0], [54.2, 4726.0], [54.3, 4733.0], [54.4, 4733.0], [54.5, 4734.0], [54.6, 4741.0], [54.7, 4742.0], [54.8, 4742.0], [54.9, 4742.0], [55.0, 4743.0], [55.1, 4743.0], [55.2, 4744.0], [55.3, 4744.0], [55.4, 4748.0], [55.5, 4748.0], [55.6, 4748.0], [55.7, 4751.0], [55.8, 4752.0], [55.9, 4752.0], [56.0, 4753.0], [56.1, 4755.0], [56.2, 4759.0], [56.3, 4759.0], [56.4, 4769.0], [56.5, 4770.0], [56.6, 4772.0], [56.7, 4772.0], [56.8, 4775.0], [56.9, 4776.0], [57.0, 4776.0], [57.1, 4777.0], [57.2, 4777.0], [57.3, 4778.0], [57.4, 4778.0], [57.5, 4781.0], [57.6, 4782.0], [57.7, 4786.0], [57.8, 4786.0], [57.9, 4787.0], [58.0, 4788.0], [58.1, 4790.0], [58.2, 4790.0], [58.3, 4792.0], [58.4, 4797.0], [58.5, 4797.0], [58.6, 4801.0], [58.7, 4803.0], [58.8, 4804.0], [58.9, 4804.0], [59.0, 4805.0], [59.1, 4807.0], [59.2, 4809.0], [59.3, 4809.0], [59.4, 4811.0], [59.5, 4818.0], [59.6, 4826.0], [59.7, 4826.0], [59.8, 4826.0], [59.9, 4830.0], [60.0, 4833.0], [60.1, 4833.0], [60.2, 4835.0], [60.3, 4837.0], [60.4, 4837.0], [60.5, 4839.0], [60.6, 4839.0], [60.7, 4841.0], [60.8, 4841.0], [60.9, 4846.0], [61.0, 4846.0], [61.1, 4848.0], [61.2, 4848.0], [61.3, 4855.0], [61.4, 4858.0], [61.5, 4860.0], [61.6, 4860.0], [61.7, 4862.0], [61.8, 4863.0], [61.9, 4863.0], [62.0, 4866.0], [62.1, 4866.0], [62.2, 4866.0], [62.3, 4866.0], [62.4, 4866.0], [62.5, 4869.0], [62.6, 4871.0], [62.7, 4871.0], [62.8, 4876.0], [62.9, 4876.0], [63.0, 4880.0], [63.1, 4880.0], [63.2, 4883.0], [63.3, 4883.0], [63.4, 4883.0], [63.5, 4885.0], [63.6, 4886.0], [63.7, 4887.0], [63.8, 4887.0], [63.9, 4889.0], [64.0, 4893.0], [64.1, 4894.0], [64.2, 4894.0], [64.3, 4902.0], [64.4, 4902.0], [64.5, 4904.0], [64.6, 4904.0], [64.7, 4905.0], [64.8, 4909.0], [64.9, 4909.0], [65.0, 4909.0], [65.1, 4918.0], [65.2, 4921.0], [65.3, 4921.0], [65.4, 4921.0], [65.5, 4923.0], [65.6, 4928.0], [65.7, 4928.0], [65.8, 4928.0], [65.9, 4930.0], [66.0, 4932.0], [66.1, 4932.0], [66.2, 4935.0], [66.3, 4938.0], [66.4, 4940.0], [66.5, 4940.0], [66.6, 4940.0], [66.7, 4942.0], [66.8, 4942.0], [66.9, 4948.0], [67.0, 4949.0], [67.1, 4953.0], [67.2, 4953.0], [67.3, 4958.0], [67.4, 4965.0], [67.5, 4969.0], [67.6, 4969.0], [67.7, 4970.0], [67.8, 4970.0], [67.9, 4970.0], [68.0, 4970.0], [68.1, 4971.0], [68.2, 4974.0], [68.3, 4974.0], [68.4, 4974.0], [68.5, 4980.0], [68.6, 4985.0], [68.7, 4985.0], [68.8, 4986.0], [68.9, 4987.0], [69.0, 4989.0], [69.1, 4989.0], [69.2, 4989.0], [69.3, 5000.0], [69.4, 5002.0], [69.5, 5002.0], [69.6, 5002.0], [69.7, 5007.0], [69.8, 5008.0], [69.9, 5008.0], [70.0, 5008.0], [70.1, 5009.0], [70.2, 5009.0], [70.3, 5009.0], [70.4, 5010.0], [70.5, 5015.0], [70.6, 5015.0], [70.7, 5015.0], [70.8, 5017.0], [70.9, 5017.0], [71.0, 5017.0], [71.1, 5023.0], [71.2, 5024.0], [71.3, 5025.0], [71.4, 5025.0], [71.5, 5027.0], [71.6, 5027.0], [71.7, 5027.0], [71.8, 5027.0], [71.9, 5028.0], [72.0, 5034.0], [72.1, 5034.0], [72.2, 5034.0], [72.3, 5035.0], [72.4, 5035.0], [72.5, 5035.0], [72.6, 5035.0], [72.7, 5036.0], [72.8, 5045.0], [72.9, 5045.0], [73.0, 5046.0], [73.1, 5049.0], [73.2, 5049.0], [73.3, 5049.0], [73.4, 5049.0], [73.5, 5050.0], [73.6, 5050.0], [73.7, 5052.0], [73.8, 5053.0], [73.9, 5058.0], [74.0, 5058.0], [74.1, 5060.0], [74.2, 5067.0], [74.3, 5073.0], [74.4, 5073.0], [74.5, 5080.0], [74.6, 5084.0], [74.7, 5085.0], [74.8, 5085.0], [74.9, 5089.0], [75.0, 5090.0], [75.1, 5090.0], [75.2, 5092.0], [75.3, 5093.0], [75.4, 5095.0], [75.5, 5095.0], [75.6, 5101.0], [75.7, 5101.0], [75.8, 5106.0], [75.9, 5106.0], [76.0, 5107.0], [76.1, 5109.0], [76.2, 5110.0], [76.3, 5110.0], [76.4, 5118.0], [76.5, 5121.0], [76.6, 5126.0], [76.7, 5126.0], [76.8, 5126.0], [76.9, 5127.0], [77.0, 5127.0], [77.1, 5127.0], [77.2, 5128.0], [77.3, 5129.0], [77.4, 5129.0], [77.5, 5132.0], [77.6, 5133.0], [77.7, 5134.0], [77.8, 5134.0], [77.9, 5138.0], [78.0, 5145.0], [78.1, 5149.0], [78.2, 5149.0], [78.3, 5155.0], [78.4, 5157.0], [78.5, 5157.0], [78.6, 5162.0], [78.7, 5162.0], [78.8, 5174.0], [78.9, 5174.0], [79.0, 5175.0], [79.1, 5176.0], [79.2, 5178.0], [79.3, 5178.0], [79.4, 5180.0], [79.5, 5182.0], [79.6, 5184.0], [79.7, 5184.0], [79.8, 5190.0], [79.9, 5196.0], [80.0, 5196.0], [80.1, 5196.0], [80.2, 5197.0], [80.3, 5200.0], [80.4, 5200.0], [80.5, 5202.0], [80.6, 5203.0], [80.7, 5203.0], [80.8, 5203.0], [80.9, 5208.0], [81.0, 5210.0], [81.1, 5212.0], [81.2, 5212.0], [81.3, 5218.0], [81.4, 5221.0], [81.5, 5231.0], [81.6, 5231.0], [81.7, 5234.0], [81.8, 5235.0], [81.9, 5235.0], [82.0, 5237.0], [82.1, 5246.0], [82.2, 5248.0], [82.3, 5248.0], [82.4, 5254.0], [82.5, 5261.0], [82.6, 5263.0], [82.7, 5263.0], [82.8, 5264.0], [82.9, 5277.0], [83.0, 5281.0], [83.1, 5281.0], [83.2, 5282.0], [83.3, 5286.0], [83.4, 5286.0], [83.5, 5295.0], [83.6, 5299.0], [83.7, 5302.0], [83.8, 5302.0], [83.9, 5309.0], [84.0, 5309.0], [84.1, 5310.0], [84.2, 5310.0], [84.3, 5312.0], [84.4, 5326.0], [84.5, 5326.0], [84.6, 5326.0], [84.7, 5330.0], [84.8, 5334.0], [84.9, 5339.0], [85.0, 5339.0], [85.1, 5341.0], [85.2, 5345.0], [85.3, 5345.0], [85.4, 5354.0], [85.5, 5355.0], [85.6, 5359.0], [85.7, 5359.0], [85.8, 5362.0], [85.9, 5373.0], [86.0, 5373.0], [86.1, 5373.0], [86.2, 5382.0], [86.3, 5382.0], [86.4, 5383.0], [86.5, 5383.0], [86.6, 5383.0], [86.7, 5387.0], [86.8, 5387.0], [86.9, 5387.0], [87.0, 5403.0], [87.1, 5417.0], [87.2, 5417.0], [87.3, 5419.0], [87.4, 5424.0], [87.5, 5443.0], [87.6, 5443.0], [87.7, 5448.0], [87.8, 5462.0], [87.9, 5464.0], [88.0, 5464.0], [88.1, 5467.0], [88.2, 5468.0], [88.3, 5482.0], [88.4, 5482.0], [88.5, 5520.0], [88.6, 5522.0], [88.7, 5522.0], [88.8, 5539.0], [88.9, 5562.0], [89.0, 5564.0], [89.1, 5564.0], [89.2, 5580.0], [89.3, 5593.0], [89.4, 5621.0], [89.5, 5621.0], [89.6, 5629.0], [89.7, 5646.0], [89.8, 5662.0], [89.9, 5662.0], [90.0, 5664.0], [90.1, 5691.0], [90.2, 5691.0], [90.3, 5704.0], [90.4, 5718.0], [90.5, 5723.0], [90.6, 5723.0], [90.7, 5723.0], [90.8, 5766.0], [90.9, 5769.0], [91.0, 5769.0], [91.1, 5779.0], [91.2, 5794.0], [91.3, 5804.0], [91.4, 5804.0], [91.5, 5814.0], [91.6, 5824.0], [91.7, 5824.0], [91.8, 5851.0], [91.9, 5867.0], [92.0, 5937.0], [92.1, 5937.0], [92.2, 5964.0], [92.3, 5976.0], [92.4, 6012.0], [92.5, 6012.0], [92.6, 6017.0], [92.7, 6047.0], [92.8, 6070.0], [92.9, 6070.0], [93.0, 6127.0], [93.1, 6132.0], [93.2, 6174.0], [93.3, 6174.0], [93.4, 6188.0], [93.5, 6218.0], [93.6, 6218.0], [93.7, 6267.0], [93.8, 6270.0], [93.9, 6271.0], [94.0, 6271.0], [94.1, 6298.0], [94.2, 6313.0], [94.3, 6405.0], [94.4, 6405.0], [94.5, 6424.0], [94.6, 6434.0], [94.7, 6439.0], [94.8, 6439.0], [94.9, 6478.0], [95.0, 6519.0], [95.1, 6519.0], [95.2, 6534.0], [95.3, 6558.0], [95.4, 6603.0], [95.5, 6603.0], [95.6, 6641.0], [95.7, 6656.0], [95.8, 6715.0], [95.9, 6715.0], [96.0, 6717.0], [96.1, 6766.0], [96.2, 6798.0], [96.3, 6798.0], [96.4, 6817.0], [96.5, 6821.0], [96.6, 6822.0], [96.7, 6822.0], [96.8, 6825.0], [96.9, 6831.0], [97.0, 6831.0], [97.1, 6872.0], [97.2, 6880.0], [97.3, 6886.0], [97.4, 6886.0], [97.5, 6934.0], [97.6, 6942.0], [97.7, 6950.0], [97.8, 6950.0], [97.9, 6953.0], [98.0, 6953.0], [98.1, 6989.0], [98.2, 6989.0], [98.3, 7016.0], [98.4, 7030.0], [98.5, 7030.0], [98.6, 7067.0], [98.7, 7099.0], [98.8, 7124.0], [98.9, 7124.0], [99.0, 7173.0], [99.1, 7242.0], [99.2, 7290.0], [99.3, 7290.0], [99.4, 7367.0], [99.5, 7383.0], [99.6, 7435.0], [99.7, 7435.0], [99.8, 7445.0], [99.9, 7560.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1900.0, "maxY": 46.0, "series": [{"data": [[1900.0, 1.0], [2000.0, 2.0], [2100.0, 1.0], [2400.0, 4.0], [2500.0, 6.0], [2600.0, 6.0], [2700.0, 10.0], [2800.0, 20.0], [2900.0, 14.0], [3000.0, 16.0], [3100.0, 20.0], [3300.0, 14.0], [3200.0, 23.0], [3400.0, 12.0], [3500.0, 21.0], [3700.0, 23.0], [3600.0, 16.0], [3800.0, 19.0], [3900.0, 10.0], [4000.0, 16.0], [4200.0, 24.0], [4100.0, 11.0], [4300.0, 18.0], [4500.0, 23.0], [4600.0, 33.0], [4400.0, 26.0], [4700.0, 41.0], [4800.0, 42.0], [4900.0, 37.0], [5000.0, 46.0], [5100.0, 35.0], [5200.0, 25.0], [5300.0, 24.0], [5500.0, 7.0], [5600.0, 6.0], [5400.0, 11.0], [5700.0, 8.0], [5800.0, 5.0], [5900.0, 3.0], [6000.0, 4.0], [6100.0, 4.0], [6200.0, 5.0], [6300.0, 1.0], [6400.0, 5.0], [6500.0, 3.0], [6600.0, 3.0], [6700.0, 4.0], [6800.0, 8.0], [6900.0, 6.0], [7000.0, 4.0], [7100.0, 2.0], [7200.0, 2.0], [7400.0, 2.0], [7300.0, 2.0], [7500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.285714285714286, "minX": 1.60386546E12, "maxY": 10.0, "series": [{"data": [[1.6038657E12, 10.0], [1.60386552E12, 10.0], [1.60386558E12, 10.0], [1.60386546E12, 10.0], [1.60386576E12, 10.0], [1.60386582E12, 9.285714285714286], [1.60386564E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386582E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3181.0, "minX": 1.0, "maxY": 4505.866391184573, "series": [{"data": [[8.0, 3238.0], [4.0, 3227.0], [2.0, 3196.0], [1.0, 3579.0], [9.0, 3242.0], [10.0, 4505.866391184573], [5.0, 3287.0], [6.0, 3226.0], [3.0, 3181.0], [7.0, 3237.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 4490.710204081634]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 60.53333333333333, "minX": 1.60386546E12, "maxY": 405540.35, "series": [{"data": [[1.6038657E12, 300608.36666666664], [1.60386552E12, 405540.35], [1.60386558E12, 281166.11666666664], [1.60386546E12, 46215.5], [1.60386576E12, 266859.88333333336], [1.60386582E12, 173147.81666666668], [1.60386564E12, 362278.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038657E12, 918.9333333333333], [1.60386552E12, 924.0333333333333], [1.60386558E12, 929.5], [1.60386546E12, 60.53333333333333], [1.60386576E12, 1051.4166666666667], [1.60386582E12, 461.03333333333336], [1.60386564E12, 1177.5833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386582E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3737.4716981132074, "minX": 1.60386546E12, "maxY": 4958.462809917356, "series": [{"data": [[1.6038657E12, 4958.462809917356], [1.60386552E12, 4911.786885245898], [1.60386558E12, 4925.414634146341], [1.60386546E12, 3989.375], [1.60386576E12, 4309.964028776974], [1.60386582E12, 4291.682539682541], [1.60386564E12, 3737.4716981132074]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386582E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3736.327044025157, "minX": 1.60386546E12, "maxY": 4957.239669421487, "series": [{"data": [[1.6038657E12, 4957.239669421487], [1.60386552E12, 4910.188524590164], [1.60386558E12, 4924.219512195118], [1.60386546E12, 3986.25], [1.60386576E12, 4309.007194244602], [1.60386582E12, 4290.222222222222], [1.60386564E12, 3736.327044025157]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386582E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.024590163934426243, "minX": 1.60386546E12, "maxY": 9.875000000000002, "series": [{"data": [[1.6038657E12, 0.09917355371900832], [1.60386552E12, 0.024590163934426243], [1.60386558E12, 0.1138211382113821], [1.60386546E12, 9.875000000000002], [1.60386576E12, 0.0935251798561151], [1.60386582E12, 0.20634920634920637], [1.60386564E12, 0.07547169811320761]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386582E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1996.0, "minX": 1.60386546E12, "maxY": 7560.0, "series": [{"data": [[1.6038657E12, 7016.0], [1.60386552E12, 7560.0], [1.60386558E12, 5443.0], [1.60386546E12, 5203.0], [1.60386576E12, 5468.0], [1.60386582E12, 6132.0], [1.60386564E12, 6953.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038657E12, 3382.5679995346068], [1.60386552E12, 2534.3499985337257], [1.60386558E12, 4165.279997634888], [1.60386546E12, 2657.0], [1.60386576E12, 2822.5199999332426], [1.60386582E12, 2781.0], [1.60386564E12, 2004.7999992370605]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038657E12, 3384.324800186157], [1.60386552E12, 2539.8850005865097], [1.60386558E12, 4174.208000946045], [1.60386546E12, 2657.0], [1.60386576E12, 2822.7720000267027], [1.60386582E12, 2781.0], [1.60386564E12, 2007.6800003051758]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038657E12, 3383.5439997673034], [1.60386552E12, 2537.424999266863], [1.60386558E12, 4170.239998817444], [1.60386546E12, 2657.0], [1.60386576E12, 2822.6599999666214], [1.60386582E12, 2781.0], [1.60386564E12, 2006.3999996185303]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038657E12, 3381.0], [1.60386552E12, 2529.0], [1.60386558E12, 4156.0], [1.60386546E12, 2657.0], [1.60386576E12, 2822.0], [1.60386582E12, 2781.0], [1.60386564E12, 1996.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038657E12, 4918.0], [1.60386552E12, 4674.5], [1.60386558E12, 4940.0], [1.60386546E12, 4020.5], [1.60386576E12, 4604.0], [1.60386582E12, 4378.0], [1.60386564E12, 3575.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386582E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3233.5, "minX": 1.0, "maxY": 5263.0, "series": [{"data": [[1.0, 5263.0], [2.0, 4836.0], [4.0, 3233.5], [5.0, 3770.0], [3.0, 4484.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3233.5, "minX": 1.0, "maxY": 5261.0, "series": [{"data": [[1.0, 5261.0], [2.0, 4835.0], [4.0, 3233.5], [5.0, 3770.0], [3.0, 4483.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3, "minX": 1.60386546E12, "maxY": 2.65, "series": [{"data": [[1.6038657E12, 2.0166666666666666], [1.60386552E12, 2.033333333333333], [1.60386558E12, 2.05], [1.60386546E12, 0.3], [1.60386576E12, 2.316666666666667], [1.60386582E12, 0.8833333333333333], [1.60386564E12, 2.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386582E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60386546E12, "maxY": 2.65, "series": [{"data": [[1.6038657E12, 2.0166666666666666], [1.60386552E12, 2.033333333333333], [1.60386558E12, 2.05], [1.60386546E12, 0.13333333333333333], [1.60386576E12, 2.316666666666667], [1.60386582E12, 1.05], [1.60386564E12, 2.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386582E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60386546E12, "maxY": 2.65, "series": [{"data": [[1.6038657E12, 2.0166666666666666], [1.60386552E12, 2.033333333333333], [1.60386558E12, 2.05], [1.60386546E12, 0.13333333333333333], [1.60386576E12, 2.316666666666667], [1.60386582E12, 1.05], [1.60386564E12, 2.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386582E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60386546E12, "maxY": 2.65, "series": [{"data": [[1.6038657E12, 2.0166666666666666], [1.60386552E12, 2.033333333333333], [1.60386558E12, 2.05], [1.60386546E12, 0.13333333333333333], [1.60386576E12, 2.316666666666667], [1.60386582E12, 1.05], [1.60386564E12, 2.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386582E12, "title": "Total Transactions Per Second"}},
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

