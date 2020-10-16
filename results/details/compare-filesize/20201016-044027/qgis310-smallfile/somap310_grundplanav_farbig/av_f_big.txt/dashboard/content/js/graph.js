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
        data: {"result": {"minY": 1971.0, "minX": 0.0, "maxY": 7775.0, "series": [{"data": [[0.0, 1971.0], [0.1, 1971.0], [0.2, 1975.0], [0.3, 2051.0], [0.4, 2051.0], [0.5, 2116.0], [0.6, 2410.0], [0.7, 2423.0], [0.8, 2423.0], [0.9, 2468.0], [1.0, 2469.0], [1.1, 2480.0], [1.2, 2480.0], [1.3, 2498.0], [1.4, 2515.0], [1.5, 2579.0], [1.6, 2579.0], [1.7, 2618.0], [1.8, 2620.0], [1.9, 2620.0], [2.0, 2621.0], [2.1, 2625.0], [2.2, 2627.0], [2.3, 2627.0], [2.4, 2639.0], [2.5, 2640.0], [2.6, 2658.0], [2.7, 2658.0], [2.8, 2668.0], [2.9, 2668.0], [3.0, 2670.0], [3.1, 2670.0], [3.2, 2672.0], [3.3, 2684.0], [3.4, 2684.0], [3.5, 2714.0], [3.6, 2744.0], [3.7, 2780.0], [3.8, 2780.0], [3.9, 2789.0], [4.0, 2791.0], [4.1, 2792.0], [4.2, 2792.0], [4.3, 2792.0], [4.4, 2794.0], [4.5, 2796.0], [4.6, 2796.0], [4.7, 2797.0], [4.8, 2803.0], [4.9, 2806.0], [5.0, 2806.0], [5.1, 2811.0], [5.2, 2813.0], [5.3, 2813.0], [5.4, 2816.0], [5.5, 2818.0], [5.6, 2822.0], [5.7, 2822.0], [5.8, 2832.0], [5.9, 2835.0], [6.0, 2844.0], [6.1, 2844.0], [6.2, 2847.0], [6.3, 2856.0], [6.4, 2867.0], [6.5, 2867.0], [6.6, 2906.0], [6.7, 2907.0], [6.8, 2907.0], [6.9, 2914.0], [7.0, 2923.0], [7.1, 2923.0], [7.2, 2923.0], [7.3, 2961.0], [7.4, 2980.0], [7.5, 2991.0], [7.6, 2991.0], [7.7, 2992.0], [7.8, 3006.0], [7.9, 3017.0], [8.0, 3017.0], [8.1, 3028.0], [8.2, 3033.0], [8.3, 3044.0], [8.4, 3044.0], [8.5, 3046.0], [8.6, 3052.0], [8.7, 3052.0], [8.8, 3063.0], [8.9, 3065.0], [9.0, 3069.0], [9.1, 3069.0], [9.2, 3091.0], [9.3, 3094.0], [9.4, 3096.0], [9.5, 3096.0], [9.6, 3106.0], [9.7, 3110.0], [9.8, 3117.0], [9.9, 3117.0], [10.0, 3120.0], [10.1, 3126.0], [10.2, 3126.0], [10.3, 3131.0], [10.4, 3135.0], [10.5, 3136.0], [10.6, 3136.0], [10.7, 3137.0], [10.8, 3139.0], [10.9, 3142.0], [11.0, 3142.0], [11.1, 3149.0], [11.2, 3151.0], [11.3, 3152.0], [11.4, 3152.0], [11.5, 3153.0], [11.6, 3154.0], [11.7, 3154.0], [11.8, 3157.0], [11.9, 3161.0], [12.0, 3165.0], [12.1, 3165.0], [12.2, 3166.0], [12.3, 3171.0], [12.4, 3186.0], [12.5, 3186.0], [12.6, 3190.0], [12.7, 3193.0], [12.8, 3194.0], [12.9, 3194.0], [13.0, 3206.0], [13.1, 3207.0], [13.2, 3211.0], [13.3, 3211.0], [13.4, 3221.0], [13.5, 3227.0], [13.6, 3227.0], [13.7, 3234.0], [13.8, 3237.0], [13.9, 3256.0], [14.0, 3256.0], [14.1, 3258.0], [14.2, 3268.0], [14.3, 3275.0], [14.4, 3275.0], [14.5, 3277.0], [14.6, 3292.0], [14.7, 3293.0], [14.8, 3293.0], [14.9, 3299.0], [15.0, 3316.0], [15.1, 3316.0], [15.2, 3318.0], [15.3, 3322.0], [15.4, 3327.0], [15.5, 3327.0], [15.6, 3332.0], [15.7, 3332.0], [15.8, 3337.0], [15.9, 3337.0], [16.0, 3337.0], [16.1, 3339.0], [16.2, 3339.0], [16.3, 3339.0], [16.4, 3353.0], [16.5, 3353.0], [16.6, 3367.0], [16.7, 3367.0], [16.8, 3374.0], [16.9, 3381.0], [17.0, 3381.0], [17.1, 3382.0], [17.2, 3387.0], [17.3, 3399.0], [17.4, 3399.0], [17.5, 3404.0], [17.6, 3407.0], [17.7, 3409.0], [17.8, 3409.0], [17.9, 3417.0], [18.0, 3425.0], [18.1, 3444.0], [18.2, 3444.0], [18.3, 3451.0], [18.4, 3453.0], [18.5, 3453.0], [18.6, 3459.0], [18.7, 3462.0], [18.8, 3463.0], [18.9, 3463.0], [19.0, 3466.0], [19.1, 3481.0], [19.2, 3483.0], [19.3, 3483.0], [19.4, 3485.0], [19.5, 3489.0], [19.6, 3491.0], [19.7, 3491.0], [19.8, 3494.0], [19.9, 3507.0], [20.0, 3514.0], [20.1, 3514.0], [20.2, 3515.0], [20.3, 3524.0], [20.4, 3524.0], [20.5, 3526.0], [20.6, 3534.0], [20.7, 3538.0], [20.8, 3538.0], [20.9, 3540.0], [21.0, 3550.0], [21.1, 3564.0], [21.2, 3564.0], [21.3, 3570.0], [21.4, 3574.0], [21.5, 3576.0], [21.6, 3576.0], [21.7, 3584.0], [21.8, 3588.0], [21.9, 3588.0], [22.0, 3590.0], [22.1, 3591.0], [22.2, 3607.0], [22.3, 3607.0], [22.4, 3608.0], [22.5, 3613.0], [22.6, 3623.0], [22.7, 3623.0], [22.8, 3628.0], [22.9, 3629.0], [23.0, 3631.0], [23.1, 3631.0], [23.2, 3633.0], [23.3, 3641.0], [23.4, 3641.0], [23.5, 3643.0], [23.6, 3668.0], [23.7, 3685.0], [23.8, 3685.0], [23.9, 3701.0], [24.0, 3702.0], [24.1, 3703.0], [24.2, 3703.0], [24.3, 3705.0], [24.4, 3710.0], [24.5, 3711.0], [24.6, 3711.0], [24.7, 3713.0], [24.8, 3717.0], [24.9, 3726.0], [25.0, 3726.0], [25.1, 3727.0], [25.2, 3734.0], [25.3, 3734.0], [25.4, 3736.0], [25.5, 3738.0], [25.6, 3738.0], [25.7, 3738.0], [25.8, 3740.0], [25.9, 3741.0], [26.0, 3742.0], [26.1, 3742.0], [26.2, 3744.0], [26.3, 3747.0], [26.4, 3747.0], [26.5, 3747.0], [26.6, 3748.0], [26.7, 3750.0], [26.8, 3750.0], [26.9, 3754.0], [27.0, 3760.0], [27.1, 3767.0], [27.2, 3767.0], [27.3, 3768.0], [27.4, 3772.0], [27.5, 3773.0], [27.6, 3773.0], [27.7, 3783.0], [27.8, 3786.0], [27.9, 3793.0], [28.0, 3793.0], [28.1, 3795.0], [28.2, 3798.0], [28.3, 3800.0], [28.4, 3800.0], [28.5, 3803.0], [28.6, 3804.0], [28.7, 3804.0], [28.8, 3810.0], [28.9, 3820.0], [29.0, 3828.0], [29.1, 3828.0], [29.2, 3828.0], [29.3, 3829.0], [29.4, 3832.0], [29.5, 3832.0], [29.6, 3835.0], [29.7, 3869.0], [29.8, 3870.0], [29.9, 3870.0], [30.0, 3876.0], [30.1, 3877.0], [30.2, 3877.0], [30.3, 3880.0], [30.4, 3890.0], [30.5, 3897.0], [30.6, 3897.0], [30.7, 3909.0], [30.8, 3909.0], [30.9, 3930.0], [31.0, 3930.0], [31.1, 3937.0], [31.2, 3960.0], [31.3, 3963.0], [31.4, 3963.0], [31.5, 3963.0], [31.6, 3984.0], [31.7, 3984.0], [31.8, 3985.0], [31.9, 3988.0], [32.0, 3994.0], [32.1, 3994.0], [32.2, 3998.0], [32.3, 4006.0], [32.4, 4006.0], [32.5, 4006.0], [32.6, 4019.0], [32.7, 4024.0], [32.8, 4025.0], [32.9, 4025.0], [33.0, 4031.0], [33.1, 4037.0], [33.2, 4053.0], [33.3, 4053.0], [33.4, 4064.0], [33.5, 4067.0], [33.6, 4067.0], [33.7, 4079.0], [33.8, 4085.0], [33.9, 4086.0], [34.0, 4086.0], [34.1, 4090.0], [34.2, 4094.0], [34.3, 4111.0], [34.4, 4111.0], [34.5, 4111.0], [34.6, 4115.0], [34.7, 4116.0], [34.8, 4116.0], [34.9, 4119.0], [35.0, 4122.0], [35.1, 4122.0], [35.2, 4139.0], [35.3, 4167.0], [35.4, 4183.0], [35.5, 4183.0], [35.6, 4192.0], [35.7, 4193.0], [35.8, 4201.0], [35.9, 4201.0], [36.0, 4205.0], [36.1, 4224.0], [36.2, 4236.0], [36.3, 4236.0], [36.4, 4236.0], [36.5, 4236.0], [36.6, 4242.0], [36.7, 4242.0], [36.8, 4245.0], [36.9, 4256.0], [37.0, 4256.0], [37.1, 4271.0], [37.2, 4274.0], [37.3, 4282.0], [37.4, 4282.0], [37.5, 4284.0], [37.6, 4300.0], [37.7, 4326.0], [37.8, 4326.0], [37.9, 4340.0], [38.0, 4343.0], [38.1, 4349.0], [38.2, 4349.0], [38.3, 4350.0], [38.4, 4359.0], [38.5, 4359.0], [38.6, 4361.0], [38.7, 4364.0], [38.8, 4366.0], [38.9, 4366.0], [39.0, 4368.0], [39.1, 4372.0], [39.2, 4376.0], [39.3, 4376.0], [39.4, 4376.0], [39.5, 4379.0], [39.6, 4381.0], [39.7, 4381.0], [39.8, 4385.0], [39.9, 4388.0], [40.0, 4388.0], [40.1, 4388.0], [40.2, 4389.0], [40.3, 4417.0], [40.4, 4417.0], [40.5, 4422.0], [40.6, 4423.0], [40.7, 4426.0], [40.8, 4426.0], [40.9, 4430.0], [41.0, 4436.0], [41.1, 4444.0], [41.2, 4444.0], [41.3, 4445.0], [41.4, 4448.0], [41.5, 4448.0], [41.6, 4448.0], [41.7, 4449.0], [41.8, 4450.0], [41.9, 4450.0], [42.0, 4460.0], [42.1, 4462.0], [42.2, 4467.0], [42.3, 4467.0], [42.4, 4474.0], [42.5, 4475.0], [42.6, 4477.0], [42.7, 4477.0], [42.8, 4482.0], [42.9, 4482.0], [43.0, 4484.0], [43.1, 4484.0], [43.2, 4489.0], [43.3, 4492.0], [43.4, 4492.0], [43.5, 4505.0], [43.6, 4506.0], [43.7, 4510.0], [43.8, 4510.0], [43.9, 4511.0], [44.0, 4519.0], [44.1, 4524.0], [44.2, 4524.0], [44.3, 4525.0], [44.4, 4526.0], [44.5, 4532.0], [44.6, 4532.0], [44.7, 4535.0], [44.8, 4537.0], [44.9, 4540.0], [45.0, 4540.0], [45.1, 4543.0], [45.2, 4545.0], [45.3, 4545.0], [45.4, 4548.0], [45.5, 4549.0], [45.6, 4557.0], [45.7, 4557.0], [45.8, 4559.0], [45.9, 4561.0], [46.0, 4562.0], [46.1, 4562.0], [46.2, 4563.0], [46.3, 4565.0], [46.4, 4568.0], [46.5, 4568.0], [46.6, 4580.0], [46.7, 4583.0], [46.8, 4583.0], [46.9, 4587.0], [47.0, 4588.0], [47.1, 4588.0], [47.2, 4588.0], [47.3, 4590.0], [47.4, 4592.0], [47.5, 4596.0], [47.6, 4596.0], [47.7, 4602.0], [47.8, 4613.0], [47.9, 4617.0], [48.0, 4617.0], [48.1, 4620.0], [48.2, 4622.0], [48.3, 4626.0], [48.4, 4626.0], [48.5, 4629.0], [48.6, 4633.0], [48.7, 4633.0], [48.8, 4635.0], [48.9, 4641.0], [49.0, 4645.0], [49.1, 4645.0], [49.2, 4659.0], [49.3, 4660.0], [49.4, 4662.0], [49.5, 4662.0], [49.6, 4664.0], [49.7, 4665.0], [49.8, 4665.0], [49.9, 4665.0], [50.0, 4668.0], [50.1, 4671.0], [50.2, 4671.0], [50.3, 4671.0], [50.4, 4673.0], [50.5, 4674.0], [50.6, 4674.0], [50.7, 4677.0], [50.8, 4679.0], [50.9, 4680.0], [51.0, 4680.0], [51.1, 4683.0], [51.2, 4688.0], [51.3, 4696.0], [51.4, 4696.0], [51.5, 4696.0], [51.6, 4701.0], [51.7, 4701.0], [51.8, 4702.0], [51.9, 4702.0], [52.0, 4708.0], [52.1, 4708.0], [52.2, 4714.0], [52.3, 4722.0], [52.4, 4722.0], [52.5, 4722.0], [52.6, 4725.0], [52.7, 4727.0], [52.8, 4728.0], [52.9, 4728.0], [53.0, 4729.0], [53.1, 4732.0], [53.2, 4733.0], [53.3, 4733.0], [53.4, 4736.0], [53.5, 4747.0], [53.6, 4747.0], [53.7, 4750.0], [53.8, 4750.0], [53.9, 4754.0], [54.0, 4754.0], [54.1, 4774.0], [54.2, 4783.0], [54.3, 4783.0], [54.4, 4783.0], [54.5, 4790.0], [54.6, 4791.0], [54.7, 4792.0], [54.8, 4792.0], [54.9, 4795.0], [55.0, 4797.0], [55.1, 4797.0], [55.2, 4797.0], [55.3, 4801.0], [55.4, 4803.0], [55.5, 4803.0], [55.6, 4805.0], [55.7, 4807.0], [55.8, 4808.0], [55.9, 4808.0], [56.0, 4811.0], [56.1, 4811.0], [56.2, 4812.0], [56.3, 4812.0], [56.4, 4813.0], [56.5, 4813.0], [56.6, 4813.0], [56.7, 4813.0], [56.8, 4816.0], [56.9, 4817.0], [57.0, 4817.0], [57.1, 4819.0], [57.2, 4819.0], [57.3, 4820.0], [57.4, 4820.0], [57.5, 4821.0], [57.6, 4823.0], [57.7, 4826.0], [57.8, 4826.0], [57.9, 4827.0], [58.0, 4830.0], [58.1, 4833.0], [58.2, 4833.0], [58.3, 4833.0], [58.4, 4833.0], [58.5, 4833.0], [58.6, 4835.0], [58.7, 4837.0], [58.8, 4840.0], [58.9, 4840.0], [59.0, 4840.0], [59.1, 4846.0], [59.2, 4848.0], [59.3, 4848.0], [59.4, 4849.0], [59.5, 4852.0], [59.6, 4853.0], [59.7, 4853.0], [59.8, 4855.0], [59.9, 4856.0], [60.0, 4856.0], [60.1, 4856.0], [60.2, 4857.0], [60.3, 4857.0], [60.4, 4857.0], [60.5, 4862.0], [60.6, 4864.0], [60.7, 4868.0], [60.8, 4868.0], [60.9, 4869.0], [61.0, 4870.0], [61.1, 4870.0], [61.2, 4870.0], [61.3, 4870.0], [61.4, 4874.0], [61.5, 4880.0], [61.6, 4880.0], [61.7, 4880.0], [61.8, 4880.0], [61.9, 4880.0], [62.0, 4881.0], [62.1, 4881.0], [62.2, 4884.0], [62.3, 4884.0], [62.4, 4886.0], [62.5, 4886.0], [62.6, 4889.0], [62.7, 4889.0], [62.8, 4898.0], [62.9, 4899.0], [63.0, 4902.0], [63.1, 4902.0], [63.2, 4906.0], [63.3, 4907.0], [63.4, 4907.0], [63.5, 4910.0], [63.6, 4912.0], [63.7, 4918.0], [63.8, 4918.0], [63.9, 4920.0], [64.0, 4930.0], [64.1, 4934.0], [64.2, 4934.0], [64.3, 4936.0], [64.4, 4943.0], [64.5, 4944.0], [64.6, 4944.0], [64.7, 4945.0], [64.8, 4946.0], [64.9, 4948.0], [65.0, 4948.0], [65.1, 4948.0], [65.2, 4949.0], [65.3, 4949.0], [65.4, 4951.0], [65.5, 4952.0], [65.6, 4956.0], [65.7, 4956.0], [65.8, 4956.0], [65.9, 4956.0], [66.0, 4956.0], [66.1, 4956.0], [66.2, 4958.0], [66.3, 4966.0], [66.4, 4967.0], [66.5, 4967.0], [66.6, 4967.0], [66.7, 4968.0], [66.8, 4968.0], [66.9, 4968.0], [67.0, 4974.0], [67.1, 4976.0], [67.2, 4976.0], [67.3, 4982.0], [67.4, 4982.0], [67.5, 4983.0], [67.6, 4983.0], [67.7, 4986.0], [67.8, 4989.0], [67.9, 4994.0], [68.0, 4994.0], [68.1, 4994.0], [68.2, 4997.0], [68.3, 5006.0], [68.4, 5006.0], [68.5, 5012.0], [68.6, 5012.0], [68.7, 5012.0], [68.8, 5014.0], [68.9, 5017.0], [69.0, 5018.0], [69.1, 5018.0], [69.2, 5025.0], [69.3, 5025.0], [69.4, 5031.0], [69.5, 5031.0], [69.6, 5032.0], [69.7, 5034.0], [69.8, 5036.0], [69.9, 5036.0], [70.0, 5038.0], [70.1, 5041.0], [70.2, 5041.0], [70.3, 5046.0], [70.4, 5048.0], [70.5, 5051.0], [70.6, 5051.0], [70.7, 5051.0], [70.8, 5053.0], [70.9, 5054.0], [71.0, 5054.0], [71.1, 5058.0], [71.2, 5068.0], [71.3, 5078.0], [71.4, 5078.0], [71.5, 5082.0], [71.6, 5082.0], [71.7, 5082.0], [71.8, 5083.0], [71.9, 5084.0], [72.0, 5086.0], [72.1, 5086.0], [72.2, 5087.0], [72.3, 5088.0], [72.4, 5089.0], [72.5, 5089.0], [72.6, 5090.0], [72.7, 5092.0], [72.8, 5095.0], [72.9, 5095.0], [73.0, 5095.0], [73.1, 5101.0], [73.2, 5101.0], [73.3, 5101.0], [73.4, 5102.0], [73.5, 5108.0], [73.6, 5108.0], [73.7, 5112.0], [73.8, 5115.0], [73.9, 5115.0], [74.0, 5115.0], [74.1, 5116.0], [74.2, 5120.0], [74.3, 5121.0], [74.4, 5121.0], [74.5, 5125.0], [74.6, 5127.0], [74.7, 5128.0], [74.8, 5128.0], [74.9, 5129.0], [75.0, 5136.0], [75.1, 5136.0], [75.2, 5139.0], [75.3, 5141.0], [75.4, 5143.0], [75.5, 5143.0], [75.6, 5143.0], [75.7, 5149.0], [75.8, 5156.0], [75.9, 5156.0], [76.0, 5158.0], [76.1, 5163.0], [76.2, 5170.0], [76.3, 5170.0], [76.4, 5170.0], [76.5, 5171.0], [76.6, 5173.0], [76.7, 5173.0], [76.8, 5178.0], [76.9, 5183.0], [77.0, 5183.0], [77.1, 5184.0], [77.2, 5189.0], [77.3, 5194.0], [77.4, 5194.0], [77.5, 5197.0], [77.6, 5199.0], [77.7, 5200.0], [77.8, 5200.0], [77.9, 5200.0], [78.0, 5209.0], [78.1, 5210.0], [78.2, 5210.0], [78.3, 5211.0], [78.4, 5212.0], [78.5, 5212.0], [78.6, 5214.0], [78.7, 5216.0], [78.8, 5216.0], [78.9, 5216.0], [79.0, 5217.0], [79.1, 5227.0], [79.2, 5234.0], [79.3, 5234.0], [79.4, 5235.0], [79.5, 5236.0], [79.6, 5238.0], [79.7, 5238.0], [79.8, 5244.0], [79.9, 5252.0], [80.0, 5252.0], [80.1, 5252.0], [80.2, 5255.0], [80.3, 5265.0], [80.4, 5265.0], [80.5, 5270.0], [80.6, 5272.0], [80.7, 5273.0], [80.8, 5273.0], [80.9, 5275.0], [81.0, 5275.0], [81.1, 5279.0], [81.2, 5279.0], [81.3, 5280.0], [81.4, 5282.0], [81.5, 5284.0], [81.6, 5284.0], [81.7, 5289.0], [81.8, 5292.0], [81.9, 5292.0], [82.0, 5292.0], [82.1, 5293.0], [82.2, 5293.0], [82.3, 5293.0], [82.4, 5295.0], [82.5, 5298.0], [82.6, 5305.0], [82.7, 5305.0], [82.8, 5313.0], [82.9, 5314.0], [83.0, 5316.0], [83.1, 5316.0], [83.2, 5317.0], [83.3, 5318.0], [83.4, 5318.0], [83.5, 5320.0], [83.6, 5329.0], [83.7, 5332.0], [83.8, 5332.0], [83.9, 5335.0], [84.0, 5339.0], [84.1, 5357.0], [84.2, 5357.0], [84.3, 5358.0], [84.4, 5362.0], [84.5, 5364.0], [84.6, 5364.0], [84.7, 5365.0], [84.8, 5366.0], [84.9, 5367.0], [85.0, 5367.0], [85.1, 5369.0], [85.2, 5370.0], [85.3, 5370.0], [85.4, 5372.0], [85.5, 5381.0], [85.6, 5382.0], [85.7, 5382.0], [85.8, 5382.0], [85.9, 5408.0], [86.0, 5412.0], [86.1, 5412.0], [86.2, 5413.0], [86.3, 5415.0], [86.4, 5416.0], [86.5, 5416.0], [86.6, 5416.0], [86.7, 5421.0], [86.8, 5421.0], [86.9, 5427.0], [87.0, 5429.0], [87.1, 5431.0], [87.2, 5431.0], [87.3, 5436.0], [87.4, 5448.0], [87.5, 5458.0], [87.6, 5458.0], [87.7, 5463.0], [87.8, 5465.0], [87.9, 5474.0], [88.0, 5474.0], [88.1, 5485.0], [88.2, 5510.0], [88.3, 5545.0], [88.4, 5545.0], [88.5, 5575.0], [88.6, 5583.0], [88.7, 5583.0], [88.8, 5583.0], [88.9, 5591.0], [89.0, 5607.0], [89.1, 5607.0], [89.2, 5643.0], [89.3, 5654.0], [89.4, 5658.0], [89.5, 5658.0], [89.6, 5658.0], [89.7, 5668.0], [89.8, 5672.0], [89.9, 5672.0], [90.0, 5675.0], [90.1, 5675.0], [90.2, 5675.0], [90.3, 5706.0], [90.4, 5717.0], [90.5, 5728.0], [90.6, 5728.0], [90.7, 5728.0], [90.8, 5737.0], [90.9, 5741.0], [91.0, 5741.0], [91.1, 5778.0], [91.2, 5839.0], [91.3, 5847.0], [91.4, 5847.0], [91.5, 5860.0], [91.6, 5863.0], [91.7, 5863.0], [91.8, 5919.0], [91.9, 5923.0], [92.0, 5928.0], [92.1, 5928.0], [92.2, 5937.0], [92.3, 6016.0], [92.4, 6024.0], [92.5, 6024.0], [92.6, 6046.0], [92.7, 6050.0], [92.8, 6153.0], [92.9, 6153.0], [93.0, 6227.0], [93.1, 6246.0], [93.2, 6248.0], [93.3, 6248.0], [93.4, 6268.0], [93.5, 6347.0], [93.6, 6347.0], [93.7, 6349.0], [93.8, 6357.0], [93.9, 6479.0], [94.0, 6479.0], [94.1, 6481.0], [94.2, 6491.0], [94.3, 6493.0], [94.4, 6493.0], [94.5, 6552.0], [94.6, 6553.0], [94.7, 6554.0], [94.8, 6554.0], [94.9, 6575.0], [95.0, 6590.0], [95.1, 6590.0], [95.2, 6591.0], [95.3, 6657.0], [95.4, 6664.0], [95.5, 6664.0], [95.6, 6720.0], [95.7, 6749.0], [95.8, 6812.0], [95.9, 6812.0], [96.0, 6813.0], [96.1, 6819.0], [96.2, 6827.0], [96.3, 6827.0], [96.4, 6849.0], [96.5, 6880.0], [96.6, 6937.0], [96.7, 6937.0], [96.8, 6941.0], [96.9, 6942.0], [97.0, 6942.0], [97.1, 6944.0], [97.2, 6962.0], [97.3, 6980.0], [97.4, 6980.0], [97.5, 6988.0], [97.6, 7010.0], [97.7, 7012.0], [97.8, 7012.0], [97.9, 7027.0], [98.0, 7056.0], [98.1, 7057.0], [98.2, 7057.0], [98.3, 7120.0], [98.4, 7189.0], [98.5, 7189.0], [98.6, 7215.0], [98.7, 7319.0], [98.8, 7356.0], [98.9, 7356.0], [99.0, 7368.0], [99.1, 7386.0], [99.2, 7392.0], [99.3, 7392.0], [99.4, 7421.0], [99.5, 7451.0], [99.6, 7566.0], [99.7, 7566.0], [99.8, 7644.0], [99.9, 7775.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1900.0, "maxY": 57.0, "series": [{"data": [[1900.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 6.0], [2500.0, 2.0], [2600.0, 13.0], [2800.0, 13.0], [2700.0, 10.0], [2900.0, 9.0], [3000.0, 13.0], [3100.0, 25.0], [3200.0, 15.0], [3300.0, 18.0], [3400.0, 18.0], [3500.0, 17.0], [3700.0, 33.0], [3600.0, 12.0], [3800.0, 17.0], [3900.0, 12.0], [4000.0, 15.0], [4100.0, 11.0], [4300.0, 20.0], [4200.0, 13.0], [4500.0, 31.0], [4600.0, 29.0], [4400.0, 23.0], [4700.0, 27.0], [4800.0, 57.0], [5100.0, 34.0], [4900.0, 39.0], [5000.0, 35.0], [5300.0, 24.0], [5200.0, 36.0], [5500.0, 6.0], [5600.0, 9.0], [5400.0, 17.0], [5800.0, 4.0], [5700.0, 7.0], [6000.0, 4.0], [5900.0, 4.0], [6100.0, 1.0], [6200.0, 4.0], [6300.0, 3.0], [6400.0, 4.0], [6500.0, 6.0], [6600.0, 2.0], [6700.0, 2.0], [6800.0, 6.0], [6900.0, 7.0], [7000.0, 5.0], [7100.0, 2.0], [7200.0, 1.0], [7300.0, 5.0], [7400.0, 2.0], [7500.0, 1.0], [7600.0, 1.0], [7700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.671532846715328, "minX": 1.60283592E12, "maxY": 10.0, "series": [{"data": [[1.60283616E12, 10.0], [1.60283604E12, 10.0], [1.60283622E12, 9.671532846715328], [1.60283592E12, 10.0], [1.6028361E12, 10.0], [1.60283598E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283622E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3131.0, "minX": 1.0, "maxY": 4546.143250688703, "series": [{"data": [[8.0, 3152.0], [4.0, 3171.0], [2.0, 3153.0], [1.0, 3515.0], [9.0, 3139.0], [10.0, 4546.143250688703], [5.0, 3186.0], [6.0, 3135.0], [3.0, 3154.0], [7.0, 3131.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 4529.572789115645]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 613.1166666666667, "minX": 1.60283592E12, "maxY": 354746.2833333333, "series": [{"data": [[1.60283616E12, 285674.3], [1.60283604E12, 307439.18333333335], [1.60283622E12, 282782.7833333333], [1.60283592E12, 318254.93333333335], [1.6028361E12, 354746.2833333333], [1.60283598E12, 286898.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283616E12, 907.7], [1.60283604E12, 1100.9333333333334], [1.60283622E12, 1020.3666666666667], [1.60283592E12, 613.1166666666667], [1.6028361E12, 1010.75], [1.60283598E12, 870.1666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283622E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4080.313868613139, "minX": 1.60283592E12, "maxY": 5201.808695652175, "series": [{"data": [[1.60283616E12, 4987.208333333334], [1.60283604E12, 4102.027210884357], [1.60283622E12, 4080.313868613139], [1.60283592E12, 4540.629629629631], [1.6028361E12, 4464.970370370372], [1.60283598E12, 5201.808695652175]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283622E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4079.364963503651, "minX": 1.60283592E12, "maxY": 5200.495652173913, "series": [{"data": [[1.60283616E12, 4986.008333333335], [1.60283604E12, 4100.92517006803], [1.60283622E12, 4079.364963503651], [1.60283592E12, 4538.913580246913], [1.6028361E12, 4463.637037037037], [1.60283598E12, 5200.495652173913]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283622E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0948905109489051, "minX": 1.60283592E12, "maxY": 1.0123456790123455, "series": [{"data": [[1.60283616E12, 0.11666666666666664], [1.60283604E12, 0.10204081632653068], [1.60283622E12, 0.0948905109489051], [1.60283592E12, 1.0123456790123455], [1.6028361E12, 0.09629629629629628], [1.60283598E12, 0.13913043478260873]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283622E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1971.0, "minX": 1.60283592E12, "maxY": 7775.0, "series": [{"data": [[1.60283616E12, 5485.0], [1.60283604E12, 5364.0], [1.60283622E12, 6246.0], [1.60283592E12, 7775.0], [1.6028361E12, 7189.0], [1.60283598E12, 7644.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283616E12, 4236.1929960477355], [1.60283604E12, 1972.3279998588562], [1.60283622E12, 2729.9719978284834], [1.60283592E12, 2423.0], [1.6028361E12, 2510.91199552536], [1.60283598E12, 3713.615999612808]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283616E12, 4251.112301580906], [1.60283604E12, 1972.8608000564575], [1.60283622E12, 2738.1692008686064], [1.60283592E12, 2423.0], [1.6028361E12, 2527.803201789856], [1.60283598E12, 3715.0776001548766]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283616E12, 4244.481498023868], [1.60283604E12, 1972.623999929428], [1.60283622E12, 2734.525998914242], [1.60283592E12, 2423.0], [1.6028361E12, 2520.29599776268], [1.60283598E12, 3714.427999806404]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283616E12, 4224.0], [1.60283604E12, 1971.0], [1.60283622E12, 2714.0], [1.60283592E12, 2423.0], [1.6028361E12, 2480.0], [1.60283598E12, 3713.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283616E12, 4982.5], [1.60283604E12, 4193.0], [1.60283622E12, 4271.0], [1.60283592E12, 3998.0], [1.6028361E12, 4067.0], [1.60283598E12, 5068.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283622E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3337.0, "minX": 1.0, "maxY": 5088.5, "series": [{"data": [[1.0, 5088.5], [2.0, 4880.0], [4.0, 3337.0], [5.0, 4165.5], [3.0, 4350.0], [6.0, 3679.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3336.5, "minX": 1.0, "maxY": 5086.5, "series": [{"data": [[1.0, 5086.5], [2.0, 4879.0], [4.0, 3336.5], [5.0, 4165.5], [3.0, 4350.0], [6.0, 3679.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.60283592E12, "maxY": 2.45, "series": [{"data": [[1.60283616E12, 2.0], [1.60283604E12, 2.45], [1.60283622E12, 2.1166666666666667], [1.60283592E12, 1.5166666666666666], [1.6028361E12, 2.25], [1.60283598E12, 1.9166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283622E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60283592E12, "maxY": 2.45, "series": [{"data": [[1.60283616E12, 2.0], [1.60283604E12, 2.45], [1.60283622E12, 2.283333333333333], [1.60283592E12, 1.35], [1.6028361E12, 2.25], [1.60283598E12, 1.9166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283622E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60283592E12, "maxY": 2.45, "series": [{"data": [[1.60283616E12, 2.0], [1.60283604E12, 2.45], [1.60283622E12, 2.283333333333333], [1.60283592E12, 1.35], [1.6028361E12, 2.25], [1.60283598E12, 1.9166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283622E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.60283592E12, "maxY": 2.45, "series": [{"data": [[1.60283616E12, 2.0], [1.60283604E12, 2.45], [1.60283622E12, 2.283333333333333], [1.60283592E12, 1.35], [1.6028361E12, 2.25], [1.60283598E12, 1.9166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283622E12, "title": "Total Transactions Per Second"}},
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

