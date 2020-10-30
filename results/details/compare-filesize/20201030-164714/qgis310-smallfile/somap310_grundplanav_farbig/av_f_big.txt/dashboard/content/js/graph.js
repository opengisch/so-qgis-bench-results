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
        data: {"result": {"minY": 1949.0, "minX": 0.0, "maxY": 7900.0, "series": [{"data": [[0.0, 1949.0], [0.1, 1949.0], [0.2, 1949.0], [0.3, 2004.0], [0.4, 2004.0], [0.5, 2071.0], [0.6, 2366.0], [0.7, 2403.0], [0.8, 2403.0], [0.9, 2445.0], [1.0, 2493.0], [1.1, 2531.0], [1.2, 2531.0], [1.3, 2559.0], [1.4, 2564.0], [1.5, 2573.0], [1.6, 2573.0], [1.7, 2584.0], [1.8, 2586.0], [1.9, 2586.0], [2.0, 2595.0], [2.1, 2599.0], [2.2, 2601.0], [2.3, 2601.0], [2.4, 2601.0], [2.5, 2601.0], [2.6, 2614.0], [2.7, 2614.0], [2.8, 2622.0], [2.9, 2631.0], [3.0, 2632.0], [3.1, 2632.0], [3.2, 2632.0], [3.3, 2646.0], [3.4, 2646.0], [3.5, 2655.0], [3.6, 2687.0], [3.7, 2728.0], [3.8, 2728.0], [3.9, 2788.0], [4.0, 2797.0], [4.1, 2808.0], [4.2, 2808.0], [4.3, 2812.0], [4.4, 2814.0], [4.5, 2836.0], [4.6, 2836.0], [4.7, 2865.0], [4.8, 2869.0], [4.9, 2879.0], [5.0, 2879.0], [5.1, 2880.0], [5.2, 2889.0], [5.3, 2889.0], [5.4, 2890.0], [5.5, 2897.0], [5.6, 2899.0], [5.7, 2899.0], [5.8, 2906.0], [5.9, 2907.0], [6.0, 2909.0], [6.1, 2909.0], [6.2, 2911.0], [6.3, 2938.0], [6.4, 2940.0], [6.5, 2940.0], [6.6, 2952.0], [6.7, 2952.0], [6.8, 2952.0], [6.9, 2959.0], [7.0, 2979.0], [7.1, 2984.0], [7.2, 2984.0], [7.3, 2986.0], [7.4, 2989.0], [7.5, 2993.0], [7.6, 2993.0], [7.7, 2996.0], [7.8, 2997.0], [7.9, 3000.0], [8.0, 3000.0], [8.1, 3007.0], [8.2, 3031.0], [8.3, 3042.0], [8.4, 3042.0], [8.5, 3042.0], [8.6, 3050.0], [8.7, 3050.0], [8.8, 3054.0], [8.9, 3059.0], [9.0, 3067.0], [9.1, 3067.0], [9.2, 3070.0], [9.3, 3070.0], [9.4, 3077.0], [9.5, 3077.0], [9.6, 3082.0], [9.7, 3112.0], [9.8, 3126.0], [9.9, 3126.0], [10.0, 3129.0], [10.1, 3129.0], [10.2, 3129.0], [10.3, 3131.0], [10.4, 3136.0], [10.5, 3140.0], [10.6, 3140.0], [10.7, 3141.0], [10.8, 3143.0], [10.9, 3160.0], [11.0, 3160.0], [11.1, 3161.0], [11.2, 3163.0], [11.3, 3170.0], [11.4, 3170.0], [11.5, 3177.0], [11.6, 3181.0], [11.7, 3181.0], [11.8, 3182.0], [11.9, 3187.0], [12.0, 3189.0], [12.1, 3189.0], [12.2, 3190.0], [12.3, 3204.0], [12.4, 3204.0], [12.5, 3204.0], [12.6, 3208.0], [12.7, 3210.0], [12.8, 3217.0], [12.9, 3217.0], [13.0, 3223.0], [13.1, 3224.0], [13.2, 3230.0], [13.3, 3230.0], [13.4, 3231.0], [13.5, 3238.0], [13.6, 3238.0], [13.7, 3246.0], [13.8, 3255.0], [13.9, 3270.0], [14.0, 3270.0], [14.1, 3271.0], [14.2, 3271.0], [14.3, 3272.0], [14.4, 3272.0], [14.5, 3291.0], [14.6, 3309.0], [14.7, 3312.0], [14.8, 3312.0], [14.9, 3313.0], [15.0, 3314.0], [15.1, 3314.0], [15.2, 3325.0], [15.3, 3327.0], [15.4, 3331.0], [15.5, 3331.0], [15.6, 3334.0], [15.7, 3359.0], [15.8, 3360.0], [15.9, 3360.0], [16.0, 3360.0], [16.1, 3370.0], [16.2, 3376.0], [16.3, 3376.0], [16.4, 3376.0], [16.5, 3378.0], [16.6, 3387.0], [16.7, 3387.0], [16.8, 3388.0], [16.9, 3399.0], [17.0, 3399.0], [17.1, 3422.0], [17.2, 3424.0], [17.3, 3427.0], [17.4, 3427.0], [17.5, 3430.0], [17.6, 3437.0], [17.7, 3444.0], [17.8, 3444.0], [17.9, 3444.0], [18.0, 3448.0], [18.1, 3454.0], [18.2, 3454.0], [18.3, 3474.0], [18.4, 3476.0], [18.5, 3476.0], [18.6, 3477.0], [18.7, 3498.0], [18.8, 3501.0], [18.9, 3501.0], [19.0, 3509.0], [19.1, 3523.0], [19.2, 3530.0], [19.3, 3530.0], [19.4, 3541.0], [19.5, 3544.0], [19.6, 3555.0], [19.7, 3555.0], [19.8, 3563.0], [19.9, 3567.0], [20.0, 3569.0], [20.1, 3569.0], [20.2, 3577.0], [20.3, 3589.0], [20.4, 3589.0], [20.5, 3596.0], [20.6, 3597.0], [20.7, 3606.0], [20.8, 3606.0], [20.9, 3613.0], [21.0, 3616.0], [21.1, 3616.0], [21.2, 3616.0], [21.3, 3618.0], [21.4, 3620.0], [21.5, 3625.0], [21.6, 3625.0], [21.7, 3626.0], [21.8, 3626.0], [21.9, 3626.0], [22.0, 3629.0], [22.1, 3631.0], [22.2, 3633.0], [22.3, 3633.0], [22.4, 3636.0], [22.5, 3639.0], [22.6, 3640.0], [22.7, 3640.0], [22.8, 3640.0], [22.9, 3642.0], [23.0, 3651.0], [23.1, 3651.0], [23.2, 3660.0], [23.3, 3664.0], [23.4, 3664.0], [23.5, 3667.0], [23.6, 3669.0], [23.7, 3670.0], [23.8, 3670.0], [23.9, 3673.0], [24.0, 3681.0], [24.1, 3685.0], [24.2, 3685.0], [24.3, 3689.0], [24.4, 3691.0], [24.5, 3693.0], [24.6, 3693.0], [24.7, 3700.0], [24.8, 3705.0], [24.9, 3713.0], [25.0, 3713.0], [25.1, 3716.0], [25.2, 3723.0], [25.3, 3723.0], [25.4, 3733.0], [25.5, 3737.0], [25.6, 3741.0], [25.7, 3741.0], [25.8, 3744.0], [25.9, 3744.0], [26.0, 3745.0], [26.1, 3745.0], [26.2, 3760.0], [26.3, 3764.0], [26.4, 3770.0], [26.5, 3770.0], [26.6, 3770.0], [26.7, 3777.0], [26.8, 3777.0], [26.9, 3778.0], [27.0, 3785.0], [27.1, 3786.0], [27.2, 3786.0], [27.3, 3789.0], [27.4, 3794.0], [27.5, 3805.0], [27.6, 3805.0], [27.7, 3805.0], [27.8, 3811.0], [27.9, 3820.0], [28.0, 3820.0], [28.1, 3821.0], [28.2, 3822.0], [28.3, 3830.0], [28.4, 3830.0], [28.5, 3845.0], [28.6, 3847.0], [28.7, 3847.0], [28.8, 3849.0], [28.9, 3855.0], [29.0, 3864.0], [29.1, 3864.0], [29.2, 3879.0], [29.3, 3890.0], [29.4, 3894.0], [29.5, 3894.0], [29.6, 3912.0], [29.7, 3914.0], [29.8, 3925.0], [29.9, 3925.0], [30.0, 3931.0], [30.1, 3937.0], [30.2, 3937.0], [30.3, 3940.0], [30.4, 3941.0], [30.5, 3951.0], [30.6, 3951.0], [30.7, 3955.0], [30.8, 3958.0], [30.9, 3959.0], [31.0, 3959.0], [31.1, 3971.0], [31.2, 3972.0], [31.3, 3989.0], [31.4, 3989.0], [31.5, 4005.0], [31.6, 4005.0], [31.7, 4005.0], [31.8, 4012.0], [31.9, 4023.0], [32.0, 4042.0], [32.1, 4042.0], [32.2, 4044.0], [32.3, 4047.0], [32.4, 4051.0], [32.5, 4051.0], [32.6, 4051.0], [32.7, 4070.0], [32.8, 4073.0], [32.9, 4073.0], [33.0, 4078.0], [33.1, 4079.0], [33.2, 4086.0], [33.3, 4086.0], [33.4, 4086.0], [33.5, 4088.0], [33.6, 4088.0], [33.7, 4136.0], [33.8, 4167.0], [33.9, 4176.0], [34.0, 4176.0], [34.1, 4182.0], [34.2, 4196.0], [34.3, 4196.0], [34.4, 4196.0], [34.5, 4198.0], [34.6, 4202.0], [34.7, 4217.0], [34.8, 4217.0], [34.9, 4218.0], [35.0, 4237.0], [35.1, 4237.0], [35.2, 4242.0], [35.3, 4247.0], [35.4, 4251.0], [35.5, 4251.0], [35.6, 4256.0], [35.7, 4257.0], [35.8, 4266.0], [35.9, 4266.0], [36.0, 4275.0], [36.1, 4283.0], [36.2, 4292.0], [36.3, 4292.0], [36.4, 4292.0], [36.5, 4293.0], [36.6, 4297.0], [36.7, 4297.0], [36.8, 4297.0], [36.9, 4301.0], [37.0, 4301.0], [37.1, 4302.0], [37.2, 4302.0], [37.3, 4309.0], [37.4, 4309.0], [37.5, 4310.0], [37.6, 4315.0], [37.7, 4321.0], [37.8, 4321.0], [37.9, 4329.0], [38.0, 4336.0], [38.1, 4337.0], [38.2, 4337.0], [38.3, 4358.0], [38.4, 4364.0], [38.5, 4364.0], [38.6, 4377.0], [38.7, 4392.0], [38.8, 4393.0], [38.9, 4393.0], [39.0, 4407.0], [39.1, 4408.0], [39.2, 4411.0], [39.3, 4411.0], [39.4, 4412.0], [39.5, 4412.0], [39.6, 4414.0], [39.7, 4414.0], [39.8, 4419.0], [39.9, 4420.0], [40.0, 4421.0], [40.1, 4421.0], [40.2, 4429.0], [40.3, 4449.0], [40.4, 4449.0], [40.5, 4452.0], [40.6, 4453.0], [40.7, 4453.0], [40.8, 4453.0], [40.9, 4458.0], [41.0, 4459.0], [41.1, 4478.0], [41.2, 4478.0], [41.3, 4484.0], [41.4, 4489.0], [41.5, 4490.0], [41.6, 4490.0], [41.7, 4494.0], [41.8, 4501.0], [41.9, 4501.0], [42.0, 4502.0], [42.1, 4505.0], [42.2, 4506.0], [42.3, 4506.0], [42.4, 4514.0], [42.5, 4520.0], [42.6, 4528.0], [42.7, 4528.0], [42.8, 4529.0], [42.9, 4562.0], [43.0, 4578.0], [43.1, 4578.0], [43.2, 4578.0], [43.3, 4579.0], [43.4, 4579.0], [43.5, 4581.0], [43.6, 4582.0], [43.7, 4587.0], [43.8, 4587.0], [43.9, 4589.0], [44.0, 4590.0], [44.1, 4591.0], [44.2, 4591.0], [44.3, 4594.0], [44.4, 4596.0], [44.5, 4596.0], [44.6, 4596.0], [44.7, 4604.0], [44.8, 4605.0], [44.9, 4614.0], [45.0, 4614.0], [45.1, 4615.0], [45.2, 4615.0], [45.3, 4615.0], [45.4, 4622.0], [45.5, 4623.0], [45.6, 4624.0], [45.7, 4624.0], [45.8, 4626.0], [45.9, 4626.0], [46.0, 4627.0], [46.1, 4627.0], [46.2, 4628.0], [46.3, 4632.0], [46.4, 4637.0], [46.5, 4637.0], [46.6, 4638.0], [46.7, 4640.0], [46.8, 4640.0], [46.9, 4641.0], [47.0, 4647.0], [47.1, 4649.0], [47.2, 4649.0], [47.3, 4650.0], [47.4, 4651.0], [47.5, 4662.0], [47.6, 4662.0], [47.7, 4666.0], [47.8, 4667.0], [47.9, 4670.0], [48.0, 4670.0], [48.1, 4672.0], [48.2, 4682.0], [48.3, 4683.0], [48.4, 4683.0], [48.5, 4693.0], [48.6, 4698.0], [48.7, 4698.0], [48.8, 4704.0], [48.9, 4706.0], [49.0, 4711.0], [49.1, 4711.0], [49.2, 4714.0], [49.3, 4717.0], [49.4, 4719.0], [49.5, 4719.0], [49.6, 4724.0], [49.7, 4729.0], [49.8, 4730.0], [49.9, 4730.0], [50.0, 4732.0], [50.1, 4736.0], [50.2, 4736.0], [50.3, 4738.0], [50.4, 4739.0], [50.5, 4742.0], [50.6, 4742.0], [50.7, 4752.0], [50.8, 4753.0], [50.9, 4756.0], [51.0, 4756.0], [51.1, 4764.0], [51.2, 4765.0], [51.3, 4768.0], [51.4, 4768.0], [51.5, 4769.0], [51.6, 4771.0], [51.7, 4771.0], [51.8, 4772.0], [51.9, 4776.0], [52.0, 4777.0], [52.1, 4777.0], [52.2, 4778.0], [52.3, 4779.0], [52.4, 4779.0], [52.5, 4779.0], [52.6, 4782.0], [52.7, 4785.0], [52.8, 4788.0], [52.9, 4788.0], [53.0, 4788.0], [53.1, 4789.0], [53.2, 4790.0], [53.3, 4790.0], [53.4, 4793.0], [53.5, 4797.0], [53.6, 4797.0], [53.7, 4800.0], [53.8, 4802.0], [53.9, 4803.0], [54.0, 4803.0], [54.1, 4805.0], [54.2, 4806.0], [54.3, 4808.0], [54.4, 4808.0], [54.5, 4810.0], [54.6, 4810.0], [54.7, 4811.0], [54.8, 4811.0], [54.9, 4816.0], [55.0, 4817.0], [55.1, 4817.0], [55.2, 4817.0], [55.3, 4818.0], [55.4, 4822.0], [55.5, 4822.0], [55.6, 4823.0], [55.7, 4824.0], [55.8, 4826.0], [55.9, 4826.0], [56.0, 4829.0], [56.1, 4830.0], [56.2, 4831.0], [56.3, 4831.0], [56.4, 4834.0], [56.5, 4834.0], [56.6, 4842.0], [56.7, 4842.0], [56.8, 4843.0], [56.9, 4845.0], [57.0, 4845.0], [57.1, 4845.0], [57.2, 4846.0], [57.3, 4848.0], [57.4, 4848.0], [57.5, 4849.0], [57.6, 4849.0], [57.7, 4855.0], [57.8, 4855.0], [57.9, 4856.0], [58.0, 4857.0], [58.1, 4858.0], [58.2, 4858.0], [58.3, 4869.0], [58.4, 4869.0], [58.5, 4869.0], [58.6, 4876.0], [58.7, 4881.0], [58.8, 4881.0], [58.9, 4881.0], [59.0, 4883.0], [59.1, 4889.0], [59.2, 4889.0], [59.3, 4889.0], [59.4, 4890.0], [59.5, 4892.0], [59.6, 4892.0], [59.7, 4892.0], [59.8, 4895.0], [59.9, 4898.0], [60.0, 4898.0], [60.1, 4898.0], [60.2, 4898.0], [60.3, 4902.0], [60.4, 4902.0], [60.5, 4903.0], [60.6, 4906.0], [60.7, 4906.0], [60.8, 4906.0], [60.9, 4908.0], [61.0, 4913.0], [61.1, 4914.0], [61.2, 4914.0], [61.3, 4915.0], [61.4, 4917.0], [61.5, 4918.0], [61.6, 4918.0], [61.7, 4918.0], [61.8, 4920.0], [61.9, 4920.0], [62.0, 4926.0], [62.1, 4928.0], [62.2, 4929.0], [62.3, 4929.0], [62.4, 4930.0], [62.5, 4932.0], [62.6, 4933.0], [62.7, 4933.0], [62.8, 4943.0], [62.9, 4943.0], [63.0, 4945.0], [63.1, 4945.0], [63.2, 4945.0], [63.3, 4951.0], [63.4, 4951.0], [63.5, 4952.0], [63.6, 4954.0], [63.7, 4955.0], [63.8, 4955.0], [63.9, 4955.0], [64.0, 4956.0], [64.1, 4958.0], [64.2, 4958.0], [64.3, 4959.0], [64.4, 4961.0], [64.5, 4963.0], [64.6, 4963.0], [64.7, 4964.0], [64.8, 4966.0], [64.9, 4967.0], [65.0, 4967.0], [65.1, 4977.0], [65.2, 4982.0], [65.3, 4982.0], [65.4, 4983.0], [65.5, 4984.0], [65.6, 4986.0], [65.7, 4986.0], [65.8, 4986.0], [65.9, 4987.0], [66.0, 4989.0], [66.1, 4989.0], [66.2, 4991.0], [66.3, 5000.0], [66.4, 5000.0], [66.5, 5000.0], [66.6, 5001.0], [66.7, 5004.0], [66.8, 5004.0], [66.9, 5008.0], [67.0, 5013.0], [67.1, 5013.0], [67.2, 5013.0], [67.3, 5013.0], [67.4, 5014.0], [67.5, 5017.0], [67.6, 5017.0], [67.7, 5023.0], [67.8, 5024.0], [67.9, 5029.0], [68.0, 5029.0], [68.1, 5032.0], [68.2, 5034.0], [68.3, 5036.0], [68.4, 5036.0], [68.5, 5039.0], [68.6, 5052.0], [68.7, 5052.0], [68.8, 5053.0], [68.9, 5055.0], [69.0, 5056.0], [69.1, 5056.0], [69.2, 5056.0], [69.3, 5058.0], [69.4, 5061.0], [69.5, 5061.0], [69.6, 5062.0], [69.7, 5063.0], [69.8, 5064.0], [69.9, 5064.0], [70.0, 5067.0], [70.1, 5069.0], [70.2, 5069.0], [70.3, 5073.0], [70.4, 5078.0], [70.5, 5080.0], [70.6, 5080.0], [70.7, 5081.0], [70.8, 5082.0], [70.9, 5083.0], [71.0, 5083.0], [71.1, 5083.0], [71.2, 5089.0], [71.3, 5093.0], [71.4, 5093.0], [71.5, 5099.0], [71.6, 5100.0], [71.7, 5100.0], [71.8, 5102.0], [71.9, 5107.0], [72.0, 5108.0], [72.1, 5108.0], [72.2, 5111.0], [72.3, 5118.0], [72.4, 5120.0], [72.5, 5120.0], [72.6, 5121.0], [72.7, 5123.0], [72.8, 5124.0], [72.9, 5124.0], [73.0, 5125.0], [73.1, 5126.0], [73.2, 5131.0], [73.3, 5131.0], [73.4, 5131.0], [73.5, 5132.0], [73.6, 5132.0], [73.7, 5137.0], [73.8, 5138.0], [73.9, 5140.0], [74.0, 5140.0], [74.1, 5143.0], [74.2, 5145.0], [74.3, 5149.0], [74.4, 5149.0], [74.5, 5158.0], [74.6, 5158.0], [74.7, 5158.0], [74.8, 5158.0], [74.9, 5162.0], [75.0, 5162.0], [75.1, 5162.0], [75.2, 5163.0], [75.3, 5164.0], [75.4, 5166.0], [75.5, 5166.0], [75.6, 5168.0], [75.7, 5171.0], [75.8, 5173.0], [75.9, 5173.0], [76.0, 5173.0], [76.1, 5175.0], [76.2, 5177.0], [76.3, 5177.0], [76.4, 5179.0], [76.5, 5186.0], [76.6, 5188.0], [76.7, 5188.0], [76.8, 5191.0], [76.9, 5196.0], [77.0, 5196.0], [77.1, 5197.0], [77.2, 5199.0], [77.3, 5199.0], [77.4, 5199.0], [77.5, 5215.0], [77.6, 5221.0], [77.7, 5224.0], [77.8, 5224.0], [77.9, 5224.0], [78.0, 5226.0], [78.1, 5236.0], [78.2, 5236.0], [78.3, 5238.0], [78.4, 5249.0], [78.5, 5249.0], [78.6, 5250.0], [78.7, 5251.0], [78.8, 5255.0], [78.9, 5255.0], [79.0, 5262.0], [79.1, 5264.0], [79.2, 5268.0], [79.3, 5268.0], [79.4, 5271.0], [79.5, 5274.0], [79.6, 5281.0], [79.7, 5281.0], [79.8, 5282.0], [79.9, 5285.0], [80.0, 5286.0], [80.1, 5286.0], [80.2, 5292.0], [80.3, 5297.0], [80.4, 5297.0], [80.5, 5301.0], [80.6, 5305.0], [80.7, 5308.0], [80.8, 5308.0], [80.9, 5310.0], [81.0, 5319.0], [81.1, 5320.0], [81.2, 5320.0], [81.3, 5321.0], [81.4, 5324.0], [81.5, 5330.0], [81.6, 5330.0], [81.7, 5333.0], [81.8, 5337.0], [81.9, 5337.0], [82.0, 5340.0], [82.1, 5346.0], [82.2, 5349.0], [82.3, 5349.0], [82.4, 5349.0], [82.5, 5351.0], [82.6, 5351.0], [82.7, 5351.0], [82.8, 5355.0], [82.9, 5359.0], [83.0, 5362.0], [83.1, 5362.0], [83.2, 5369.0], [83.3, 5373.0], [83.4, 5373.0], [83.5, 5373.0], [83.6, 5381.0], [83.7, 5386.0], [83.8, 5386.0], [83.9, 5390.0], [84.0, 5397.0], [84.1, 5406.0], [84.2, 5406.0], [84.3, 5408.0], [84.4, 5411.0], [84.5, 5411.0], [84.6, 5411.0], [84.7, 5411.0], [84.8, 5416.0], [84.9, 5417.0], [85.0, 5417.0], [85.1, 5432.0], [85.2, 5434.0], [85.3, 5434.0], [85.4, 5436.0], [85.5, 5440.0], [85.6, 5449.0], [85.7, 5449.0], [85.8, 5456.0], [85.9, 5457.0], [86.0, 5459.0], [86.1, 5459.0], [86.2, 5465.0], [86.3, 5471.0], [86.4, 5475.0], [86.5, 5475.0], [86.6, 5476.0], [86.7, 5479.0], [86.8, 5479.0], [86.9, 5485.0], [87.0, 5499.0], [87.1, 5516.0], [87.2, 5516.0], [87.3, 5517.0], [87.4, 5527.0], [87.5, 5534.0], [87.6, 5534.0], [87.7, 5536.0], [87.8, 5540.0], [87.9, 5540.0], [88.0, 5540.0], [88.1, 5544.0], [88.2, 5565.0], [88.3, 5572.0], [88.4, 5572.0], [88.5, 5581.0], [88.6, 5585.0], [88.7, 5585.0], [88.8, 5604.0], [88.9, 5625.0], [89.0, 5631.0], [89.1, 5631.0], [89.2, 5635.0], [89.3, 5636.0], [89.4, 5637.0], [89.5, 5637.0], [89.6, 5686.0], [89.7, 5714.0], [89.8, 5725.0], [89.9, 5725.0], [90.0, 5735.0], [90.1, 5759.0], [90.2, 5759.0], [90.3, 5796.0], [90.4, 5800.0], [90.5, 5800.0], [90.6, 5800.0], [90.7, 5813.0], [90.8, 5872.0], [90.9, 5881.0], [91.0, 5881.0], [91.1, 5888.0], [91.2, 5916.0], [91.3, 5922.0], [91.4, 5922.0], [91.5, 5933.0], [91.6, 5943.0], [91.7, 5943.0], [91.8, 5955.0], [91.9, 5979.0], [92.0, 6023.0], [92.1, 6023.0], [92.2, 6034.0], [92.3, 6075.0], [92.4, 6079.0], [92.5, 6079.0], [92.6, 6137.0], [92.7, 6140.0], [92.8, 6175.0], [92.9, 6175.0], [93.0, 6209.0], [93.1, 6249.0], [93.2, 6294.0], [93.3, 6294.0], [93.4, 6322.0], [93.5, 6324.0], [93.6, 6324.0], [93.7, 6400.0], [93.8, 6427.0], [93.9, 6441.0], [94.0, 6441.0], [94.1, 6458.0], [94.2, 6504.0], [94.3, 6521.0], [94.4, 6521.0], [94.5, 6532.0], [94.6, 6552.0], [94.7, 6586.0], [94.8, 6586.0], [94.9, 6592.0], [95.0, 6613.0], [95.1, 6613.0], [95.2, 6661.0], [95.3, 6666.0], [95.4, 6709.0], [95.5, 6709.0], [95.6, 6823.0], [95.7, 6876.0], [95.8, 6883.0], [95.9, 6883.0], [96.0, 6898.0], [96.1, 6903.0], [96.2, 6912.0], [96.3, 6912.0], [96.4, 6947.0], [96.5, 6983.0], [96.6, 7003.0], [96.7, 7003.0], [96.8, 7033.0], [96.9, 7043.0], [97.0, 7043.0], [97.1, 7048.0], [97.2, 7065.0], [97.3, 7074.0], [97.4, 7074.0], [97.5, 7074.0], [97.6, 7136.0], [97.7, 7139.0], [97.8, 7139.0], [97.9, 7155.0], [98.0, 7181.0], [98.1, 7185.0], [98.2, 7185.0], [98.3, 7234.0], [98.4, 7237.0], [98.5, 7237.0], [98.6, 7270.0], [98.7, 7338.0], [98.8, 7461.0], [98.9, 7461.0], [99.0, 7482.0], [99.1, 7483.0], [99.2, 7547.0], [99.3, 7547.0], [99.4, 7575.0], [99.5, 7609.0], [99.6, 7726.0], [99.7, 7726.0], [99.8, 7733.0], [99.9, 7900.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1900.0, "maxY": 49.0, "series": [{"data": [[1900.0, 2.0], [2000.0, 2.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 8.0], [2600.0, 11.0], [2800.0, 12.0], [2700.0, 3.0], [2900.0, 16.0], [3000.0, 13.0], [3100.0, 19.0], [3200.0, 17.0], [3300.0, 18.0], [3400.0, 13.0], [3500.0, 14.0], [3600.0, 29.0], [3700.0, 21.0], [3800.0, 15.0], [3900.0, 14.0], [4000.0, 16.0], [4300.0, 15.0], [4200.0, 17.0], [4100.0, 7.0], [4500.0, 21.0], [4400.0, 21.0], [4600.0, 30.0], [4700.0, 36.0], [4800.0, 49.0], [4900.0, 44.0], [5000.0, 39.0], [5100.0, 43.0], [5200.0, 22.0], [5300.0, 27.0], [5400.0, 22.0], [5600.0, 7.0], [5500.0, 12.0], [5800.0, 6.0], [5700.0, 5.0], [5900.0, 6.0], [6000.0, 4.0], [6100.0, 3.0], [6200.0, 3.0], [6300.0, 2.0], [6400.0, 4.0], [6600.0, 3.0], [6500.0, 6.0], [6900.0, 4.0], [6800.0, 4.0], [6700.0, 1.0], [7000.0, 7.0], [7100.0, 5.0], [7200.0, 3.0], [7400.0, 3.0], [7300.0, 1.0], [7600.0, 1.0], [7500.0, 2.0], [7700.0, 2.0], [7900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.678571428571429, "minX": 1.60408926E12, "maxY": 10.0, "series": [{"data": [[1.60408932E12, 10.0], [1.6040895E12, 10.0], [1.60408944E12, 10.0], [1.60408956E12, 9.678571428571429], [1.60408926E12, 10.0], [1.60408938E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60408956E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3007.0, "minX": 1.0, "maxY": 4585.465564738289, "series": [{"data": [[8.0, 3054.0], [4.0, 3182.0], [2.0, 3187.0], [1.0, 3596.0], [9.0, 3007.0], [10.0, 4585.465564738289], [5.0, 3181.0], [6.0, 3070.0], [3.0, 3189.0], [7.0, 3082.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 4568.157823129247]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 620.6666666666666, "minX": 1.60408926E12, "maxY": 358754.75, "series": [{"data": [[1.60408932E12, 283913.5833333333], [1.6040895E12, 283044.26666666666], [1.60408944E12, 358754.75], [1.60408956E12, 289965.7166666667], [1.60408926E12, 321208.1666666667], [1.60408938E12, 298877.63333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60408932E12, 862.6166666666667], [1.6040895E12, 900.1833333333333], [1.60408944E12, 1011.3666666666667], [1.60408956E12, 1043.0166666666667], [1.60408926E12, 620.6666666666666], [1.60408938E12, 1085.1833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60408956E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4105.335714285713, "minX": 1.60408926E12, "maxY": 5265.640350877193, "series": [{"data": [[1.60408932E12, 5265.640350877193], [1.6040895E12, 4970.126050420169], [1.60408944E12, 4499.8074074074075], [1.60408956E12, 4105.335714285713], [1.60408926E12, 4659.573170731709], [1.60408938E12, 4148.703448275863]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60408956E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4104.364285714284, "minX": 1.60408926E12, "maxY": 5264.385964912281, "series": [{"data": [[1.60408932E12, 5264.385964912281], [1.6040895E12, 4968.9327731092435], [1.60408944E12, 4498.518518518518], [1.60408956E12, 4104.364285714284], [1.60408926E12, 4657.865853658537], [1.60408938E12, 4147.70344827586]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60408956E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08571428571428573, "minX": 1.60408926E12, "maxY": 1.5853658536585373, "series": [{"data": [[1.60408932E12, 0.11403508771929827], [1.6040895E12, 0.09243697478991594], [1.60408944E12, 0.0888888888888889], [1.60408956E12, 0.08571428571428573], [1.60408926E12, 1.5853658536585373], [1.60408938E12, 0.08965517241379309]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60408956E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1949.0, "minX": 1.60408926E12, "maxY": 7900.0, "series": [{"data": [[1.60408932E12, 7726.0], [1.6040895E12, 5479.0], [1.60408944E12, 7237.0], [1.60408956E12, 6140.0], [1.60408926E12, 7900.0], [1.60408938E12, 5540.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60408932E12, 3895.0849991500377], [1.6040895E12, 3977.7599979400634], [1.60408944E12, 2464.263997211456], [1.60408956E12, 2593.5319990587236], [1.60408926E12, 2564.0], [1.60408938E12, 1949.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60408932E12, 3898.293500339985], [1.6040895E12, 3985.5360008239745], [1.60408944E12, 2474.7904011154174], [1.60408956E12, 2597.085200376511], [1.60408926E12, 2564.0], [1.60408938E12, 1949.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60408932E12, 3896.867499575019], [1.6040895E12, 3982.0799989700317], [1.60408944E12, 2470.1119986057283], [1.60408956E12, 2595.505999529362], [1.60408926E12, 2564.0], [1.60408938E12, 1949.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60408932E12, 3894.0], [1.6040895E12, 3972.0], [1.60408944E12, 2445.0], [1.60408956E12, 2586.0], [1.60408926E12, 2564.0], [1.60408938E12, 1949.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60408932E12, 5081.5], [1.6040895E12, 4977.0], [1.60408944E12, 4086.0], [1.60408956E12, 4292.5], [1.60408926E12, 4219.0], [1.60408938E12, 4266.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60408956E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3250.5, "minX": 1.0, "maxY": 5083.0, "series": [{"data": [[2.0, 4960.0], [1.0, 5083.0], [4.0, 3250.5], [5.0, 3749.5], [3.0, 4196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3250.5, "minX": 1.0, "maxY": 5080.0, "series": [{"data": [[2.0, 4959.0], [1.0, 5080.0], [4.0, 3250.5], [5.0, 3749.0], [3.0, 4195.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.60408926E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60408932E12, 1.9], [1.6040895E12, 1.9833333333333334], [1.60408944E12, 2.25], [1.60408956E12, 2.1666666666666665], [1.60408926E12, 1.5333333333333334], [1.60408938E12, 2.4166666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60408956E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3666666666666667, "minX": 1.60408926E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60408932E12, 1.9], [1.6040895E12, 1.9833333333333334], [1.60408944E12, 2.25], [1.60408956E12, 2.3333333333333335], [1.60408926E12, 1.3666666666666667], [1.60408938E12, 2.4166666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60408956E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3666666666666667, "minX": 1.60408926E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60408932E12, 1.9], [1.6040895E12, 1.9833333333333334], [1.60408944E12, 2.25], [1.60408956E12, 2.3333333333333335], [1.60408926E12, 1.3666666666666667], [1.60408938E12, 2.4166666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60408956E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3666666666666667, "minX": 1.60408926E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60408932E12, 1.9], [1.6040895E12, 1.9833333333333334], [1.60408944E12, 2.25], [1.60408956E12, 2.3333333333333335], [1.60408926E12, 1.3666666666666667], [1.60408938E12, 2.4166666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60408956E12, "title": "Total Transactions Per Second"}},
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

