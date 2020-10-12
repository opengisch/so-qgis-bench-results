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
        data: {"result": {"minY": 1844.0, "minX": 0.0, "maxY": 7811.0, "series": [{"data": [[0.0, 1844.0], [0.1, 1844.0], [0.2, 1869.0], [0.3, 1914.0], [0.4, 1914.0], [0.5, 1978.0], [0.6, 2380.0], [0.7, 2482.0], [0.8, 2482.0], [0.9, 2490.0], [1.0, 2569.0], [1.1, 2577.0], [1.2, 2577.0], [1.3, 2595.0], [1.4, 2605.0], [1.5, 2609.0], [1.6, 2609.0], [1.7, 2617.0], [1.8, 2633.0], [1.9, 2633.0], [2.0, 2638.0], [2.1, 2646.0], [2.2, 2658.0], [2.3, 2658.0], [2.4, 2661.0], [2.5, 2662.0], [2.6, 2662.0], [2.7, 2662.0], [2.8, 2679.0], [2.9, 2712.0], [3.0, 2754.0], [3.1, 2754.0], [3.2, 2764.0], [3.3, 2765.0], [3.4, 2765.0], [3.5, 2769.0], [3.6, 2774.0], [3.7, 2782.0], [3.8, 2782.0], [3.9, 2792.0], [4.0, 2792.0], [4.1, 2817.0], [4.2, 2817.0], [4.3, 2846.0], [4.4, 2869.0], [4.5, 2880.0], [4.6, 2880.0], [4.7, 2909.0], [4.8, 2971.0], [4.9, 2981.0], [5.0, 2981.0], [5.1, 2988.0], [5.2, 2989.0], [5.3, 2989.0], [5.4, 3007.0], [5.5, 3017.0], [5.6, 3045.0], [5.7, 3045.0], [5.8, 3046.0], [5.9, 3066.0], [6.0, 3071.0], [6.1, 3071.0], [6.2, 3073.0], [6.3, 3085.0], [6.4, 3090.0], [6.5, 3090.0], [6.6, 3094.0], [6.7, 3100.0], [6.8, 3100.0], [6.9, 3116.0], [7.0, 3117.0], [7.1, 3118.0], [7.2, 3118.0], [7.3, 3131.0], [7.4, 3139.0], [7.5, 3151.0], [7.6, 3151.0], [7.7, 3163.0], [7.8, 3188.0], [7.9, 3192.0], [8.0, 3192.0], [8.1, 3196.0], [8.2, 3202.0], [8.3, 3205.0], [8.4, 3205.0], [8.5, 3208.0], [8.6, 3212.0], [8.7, 3212.0], [8.8, 3212.0], [8.9, 3216.0], [9.0, 3217.0], [9.1, 3217.0], [9.2, 3229.0], [9.3, 3230.0], [9.4, 3231.0], [9.5, 3231.0], [9.6, 3233.0], [9.7, 3234.0], [9.8, 3236.0], [9.9, 3236.0], [10.0, 3239.0], [10.1, 3240.0], [10.2, 3240.0], [10.3, 3242.0], [10.4, 3250.0], [10.5, 3274.0], [10.6, 3274.0], [10.7, 3282.0], [10.8, 3285.0], [10.9, 3293.0], [11.0, 3293.0], [11.1, 3301.0], [11.2, 3312.0], [11.3, 3324.0], [11.4, 3324.0], [11.5, 3327.0], [11.6, 3330.0], [11.7, 3330.0], [11.8, 3344.0], [11.9, 3344.0], [12.0, 3348.0], [12.1, 3348.0], [12.2, 3356.0], [12.3, 3364.0], [12.4, 3386.0], [12.5, 3386.0], [12.6, 3386.0], [12.7, 3398.0], [12.8, 3411.0], [12.9, 3411.0], [13.0, 3425.0], [13.1, 3426.0], [13.2, 3431.0], [13.3, 3431.0], [13.4, 3432.0], [13.5, 3432.0], [13.6, 3432.0], [13.7, 3444.0], [13.8, 3445.0], [13.9, 3447.0], [14.0, 3447.0], [14.1, 3449.0], [14.2, 3451.0], [14.3, 3451.0], [14.4, 3451.0], [14.5, 3459.0], [14.6, 3460.0], [14.7, 3462.0], [14.8, 3462.0], [14.9, 3467.0], [15.0, 3467.0], [15.1, 3467.0], [15.2, 3467.0], [15.3, 3470.0], [15.4, 3474.0], [15.5, 3474.0], [15.6, 3483.0], [15.7, 3485.0], [15.8, 3489.0], [15.9, 3489.0], [16.0, 3495.0], [16.1, 3522.0], [16.2, 3532.0], [16.3, 3532.0], [16.4, 3533.0], [16.5, 3537.0], [16.6, 3540.0], [16.7, 3540.0], [16.8, 3543.0], [16.9, 3544.0], [17.0, 3544.0], [17.1, 3544.0], [17.2, 3547.0], [17.3, 3552.0], [17.4, 3552.0], [17.5, 3553.0], [17.6, 3561.0], [17.7, 3563.0], [17.8, 3563.0], [17.9, 3564.0], [18.0, 3564.0], [18.1, 3567.0], [18.2, 3567.0], [18.3, 3569.0], [18.4, 3572.0], [18.5, 3572.0], [18.6, 3573.0], [18.7, 3573.0], [18.8, 3573.0], [18.9, 3573.0], [19.0, 3584.0], [19.1, 3585.0], [19.2, 3595.0], [19.3, 3595.0], [19.4, 3596.0], [19.5, 3599.0], [19.6, 3600.0], [19.7, 3600.0], [19.8, 3604.0], [19.9, 3613.0], [20.0, 3627.0], [20.1, 3627.0], [20.2, 3631.0], [20.3, 3640.0], [20.4, 3640.0], [20.5, 3646.0], [20.6, 3659.0], [20.7, 3683.0], [20.8, 3683.0], [20.9, 3688.0], [21.0, 3689.0], [21.1, 3704.0], [21.2, 3704.0], [21.3, 3707.0], [21.4, 3710.0], [21.5, 3712.0], [21.6, 3712.0], [21.7, 3720.0], [21.8, 3731.0], [21.9, 3731.0], [22.0, 3733.0], [22.1, 3747.0], [22.2, 3758.0], [22.3, 3758.0], [22.4, 3771.0], [22.5, 3779.0], [22.6, 3782.0], [22.7, 3782.0], [22.8, 3784.0], [22.9, 3794.0], [23.0, 3794.0], [23.1, 3794.0], [23.2, 3796.0], [23.3, 3812.0], [23.4, 3812.0], [23.5, 3820.0], [23.6, 3821.0], [23.7, 3826.0], [23.8, 3826.0], [23.9, 3826.0], [24.0, 3828.0], [24.1, 3829.0], [24.2, 3829.0], [24.3, 3832.0], [24.4, 3836.0], [24.5, 3844.0], [24.6, 3844.0], [24.7, 3856.0], [24.8, 3862.0], [24.9, 3865.0], [25.0, 3865.0], [25.1, 3879.0], [25.2, 3884.0], [25.3, 3884.0], [25.4, 3888.0], [25.5, 3890.0], [25.6, 3903.0], [25.7, 3903.0], [25.8, 3905.0], [25.9, 3931.0], [26.0, 3936.0], [26.1, 3936.0], [26.2, 3937.0], [26.3, 3965.0], [26.4, 3968.0], [26.5, 3968.0], [26.6, 3970.0], [26.7, 3972.0], [26.8, 3972.0], [26.9, 3976.0], [27.0, 3981.0], [27.1, 3993.0], [27.2, 3993.0], [27.3, 3996.0], [27.4, 3997.0], [27.5, 4001.0], [27.6, 4001.0], [27.7, 4003.0], [27.8, 4017.0], [27.9, 4028.0], [28.0, 4028.0], [28.1, 4036.0], [28.2, 4045.0], [28.3, 4046.0], [28.4, 4046.0], [28.5, 4049.0], [28.6, 4051.0], [28.7, 4051.0], [28.8, 4079.0], [28.9, 4079.0], [29.0, 4082.0], [29.1, 4082.0], [29.2, 4085.0], [29.3, 4091.0], [29.4, 4102.0], [29.5, 4102.0], [29.6, 4103.0], [29.7, 4116.0], [29.8, 4131.0], [29.9, 4131.0], [30.0, 4134.0], [30.1, 4149.0], [30.2, 4149.0], [30.3, 4157.0], [30.4, 4159.0], [30.5, 4161.0], [30.6, 4161.0], [30.7, 4163.0], [30.8, 4165.0], [30.9, 4175.0], [31.0, 4175.0], [31.1, 4185.0], [31.2, 4186.0], [31.3, 4196.0], [31.4, 4196.0], [31.5, 4201.0], [31.6, 4203.0], [31.7, 4203.0], [31.8, 4205.0], [31.9, 4207.0], [32.0, 4211.0], [32.1, 4211.0], [32.2, 4211.0], [32.3, 4214.0], [32.4, 4219.0], [32.5, 4219.0], [32.6, 4227.0], [32.7, 4249.0], [32.8, 4261.0], [32.9, 4261.0], [33.0, 4262.0], [33.1, 4269.0], [33.2, 4270.0], [33.3, 4270.0], [33.4, 4277.0], [33.5, 4285.0], [33.6, 4285.0], [33.7, 4296.0], [33.8, 4298.0], [33.9, 4299.0], [34.0, 4299.0], [34.1, 4303.0], [34.2, 4305.0], [34.3, 4310.0], [34.4, 4310.0], [34.5, 4315.0], [34.6, 4317.0], [34.7, 4321.0], [34.8, 4321.0], [34.9, 4357.0], [35.0, 4376.0], [35.1, 4376.0], [35.2, 4378.0], [35.3, 4380.0], [35.4, 4394.0], [35.5, 4394.0], [35.6, 4395.0], [35.7, 4401.0], [35.8, 4404.0], [35.9, 4404.0], [36.0, 4409.0], [36.1, 4414.0], [36.2, 4417.0], [36.3, 4417.0], [36.4, 4425.0], [36.5, 4426.0], [36.6, 4429.0], [36.7, 4429.0], [36.8, 4431.0], [36.9, 4432.0], [37.0, 4432.0], [37.1, 4437.0], [37.2, 4460.0], [37.3, 4461.0], [37.4, 4461.0], [37.5, 4461.0], [37.6, 4463.0], [37.7, 4475.0], [37.8, 4475.0], [37.9, 4479.0], [38.0, 4479.0], [38.1, 4480.0], [38.2, 4480.0], [38.3, 4488.0], [38.4, 4492.0], [38.5, 4492.0], [38.6, 4497.0], [38.7, 4497.0], [38.8, 4498.0], [38.9, 4498.0], [39.0, 4529.0], [39.1, 4539.0], [39.2, 4549.0], [39.3, 4549.0], [39.4, 4549.0], [39.5, 4556.0], [39.6, 4570.0], [39.7, 4570.0], [39.8, 4570.0], [39.9, 4572.0], [40.0, 4578.0], [40.1, 4578.0], [40.2, 4580.0], [40.3, 4605.0], [40.4, 4605.0], [40.5, 4610.0], [40.6, 4621.0], [40.7, 4628.0], [40.8, 4628.0], [40.9, 4658.0], [41.0, 4663.0], [41.1, 4673.0], [41.2, 4673.0], [41.3, 4687.0], [41.4, 4690.0], [41.5, 4700.0], [41.6, 4700.0], [41.7, 4703.0], [41.8, 4704.0], [41.9, 4704.0], [42.0, 4714.0], [42.1, 4717.0], [42.2, 4719.0], [42.3, 4719.0], [42.4, 4723.0], [42.5, 4741.0], [42.6, 4744.0], [42.7, 4744.0], [42.8, 4755.0], [42.9, 4755.0], [43.0, 4761.0], [43.1, 4761.0], [43.2, 4772.0], [43.3, 4780.0], [43.4, 4780.0], [43.5, 4784.0], [43.6, 4792.0], [43.7, 4793.0], [43.8, 4793.0], [43.9, 4801.0], [44.0, 4803.0], [44.1, 4811.0], [44.2, 4811.0], [44.3, 4826.0], [44.4, 4827.0], [44.5, 4831.0], [44.6, 4831.0], [44.7, 4831.0], [44.8, 4832.0], [44.9, 4832.0], [45.0, 4832.0], [45.1, 4836.0], [45.2, 4845.0], [45.3, 4845.0], [45.4, 4862.0], [45.5, 4869.0], [45.6, 4874.0], [45.7, 4874.0], [45.8, 4875.0], [45.9, 4878.0], [46.0, 4883.0], [46.1, 4883.0], [46.2, 4900.0], [46.3, 4901.0], [46.4, 4930.0], [46.5, 4930.0], [46.6, 4933.0], [46.7, 4936.0], [46.8, 4936.0], [46.9, 4938.0], [47.0, 4948.0], [47.1, 4948.0], [47.2, 4948.0], [47.3, 4950.0], [47.4, 4954.0], [47.5, 4955.0], [47.6, 4955.0], [47.7, 4955.0], [47.8, 4956.0], [47.9, 4958.0], [48.0, 4958.0], [48.1, 4960.0], [48.2, 4963.0], [48.3, 4967.0], [48.4, 4967.0], [48.5, 4967.0], [48.6, 4970.0], [48.7, 4970.0], [48.8, 4973.0], [48.9, 4981.0], [49.0, 4988.0], [49.1, 4988.0], [49.2, 4993.0], [49.3, 4993.0], [49.4, 4998.0], [49.5, 4998.0], [49.6, 5003.0], [49.7, 5018.0], [49.8, 5019.0], [49.9, 5019.0], [50.0, 5022.0], [50.1, 5025.0], [50.2, 5025.0], [50.3, 5028.0], [50.4, 5032.0], [50.5, 5032.0], [50.6, 5032.0], [50.7, 5035.0], [50.8, 5038.0], [50.9, 5040.0], [51.0, 5040.0], [51.1, 5046.0], [51.2, 5048.0], [51.3, 5048.0], [51.4, 5048.0], [51.5, 5048.0], [51.6, 5050.0], [51.7, 5050.0], [51.8, 5058.0], [51.9, 5060.0], [52.0, 5071.0], [52.1, 5071.0], [52.2, 5074.0], [52.3, 5076.0], [52.4, 5078.0], [52.5, 5078.0], [52.6, 5081.0], [52.7, 5081.0], [52.8, 5081.0], [52.9, 5081.0], [53.0, 5082.0], [53.1, 5082.0], [53.2, 5084.0], [53.3, 5084.0], [53.4, 5087.0], [53.5, 5089.0], [53.6, 5089.0], [53.7, 5089.0], [53.8, 5090.0], [53.9, 5091.0], [54.0, 5091.0], [54.1, 5094.0], [54.2, 5095.0], [54.3, 5096.0], [54.4, 5096.0], [54.5, 5096.0], [54.6, 5096.0], [54.7, 5100.0], [54.8, 5100.0], [54.9, 5103.0], [55.0, 5104.0], [55.1, 5104.0], [55.2, 5109.0], [55.3, 5109.0], [55.4, 5116.0], [55.5, 5116.0], [55.6, 5117.0], [55.7, 5117.0], [55.8, 5118.0], [55.9, 5118.0], [56.0, 5120.0], [56.1, 5125.0], [56.2, 5127.0], [56.3, 5127.0], [56.4, 5128.0], [56.5, 5131.0], [56.6, 5132.0], [56.7, 5132.0], [56.8, 5134.0], [56.9, 5135.0], [57.0, 5135.0], [57.1, 5136.0], [57.2, 5136.0], [57.3, 5141.0], [57.4, 5141.0], [57.5, 5142.0], [57.6, 5147.0], [57.7, 5148.0], [57.8, 5148.0], [57.9, 5150.0], [58.0, 5151.0], [58.1, 5152.0], [58.2, 5152.0], [58.3, 5153.0], [58.4, 5157.0], [58.5, 5157.0], [58.6, 5158.0], [58.7, 5158.0], [58.8, 5160.0], [58.9, 5160.0], [59.0, 5167.0], [59.1, 5168.0], [59.2, 5171.0], [59.3, 5171.0], [59.4, 5174.0], [59.5, 5174.0], [59.6, 5175.0], [59.7, 5175.0], [59.8, 5176.0], [59.9, 5185.0], [60.0, 5188.0], [60.1, 5188.0], [60.2, 5190.0], [60.3, 5191.0], [60.4, 5191.0], [60.5, 5192.0], [60.6, 5197.0], [60.7, 5197.0], [60.8, 5197.0], [60.9, 5198.0], [61.0, 5198.0], [61.1, 5200.0], [61.2, 5200.0], [61.3, 5202.0], [61.4, 5204.0], [61.5, 5208.0], [61.6, 5208.0], [61.7, 5210.0], [61.8, 5212.0], [61.9, 5212.0], [62.0, 5212.0], [62.1, 5214.0], [62.2, 5214.0], [62.3, 5214.0], [62.4, 5214.0], [62.5, 5214.0], [62.6, 5215.0], [62.7, 5215.0], [62.8, 5216.0], [62.9, 5218.0], [63.0, 5220.0], [63.1, 5220.0], [63.2, 5222.0], [63.3, 5231.0], [63.4, 5231.0], [63.5, 5232.0], [63.6, 5232.0], [63.7, 5233.0], [63.8, 5233.0], [63.9, 5237.0], [64.0, 5240.0], [64.1, 5243.0], [64.2, 5243.0], [64.3, 5245.0], [64.4, 5245.0], [64.5, 5247.0], [64.6, 5247.0], [64.7, 5249.0], [64.8, 5249.0], [64.9, 5257.0], [65.0, 5257.0], [65.1, 5260.0], [65.2, 5271.0], [65.3, 5271.0], [65.4, 5272.0], [65.5, 5273.0], [65.6, 5277.0], [65.7, 5277.0], [65.8, 5278.0], [65.9, 5279.0], [66.0, 5280.0], [66.1, 5280.0], [66.2, 5284.0], [66.3, 5288.0], [66.4, 5290.0], [66.5, 5290.0], [66.6, 5290.0], [66.7, 5290.0], [66.8, 5290.0], [66.9, 5293.0], [67.0, 5294.0], [67.1, 5295.0], [67.2, 5295.0], [67.3, 5296.0], [67.4, 5298.0], [67.5, 5300.0], [67.6, 5300.0], [67.7, 5300.0], [67.8, 5303.0], [67.9, 5309.0], [68.0, 5309.0], [68.1, 5311.0], [68.2, 5320.0], [68.3, 5323.0], [68.4, 5323.0], [68.5, 5324.0], [68.6, 5325.0], [68.7, 5325.0], [68.8, 5325.0], [68.9, 5333.0], [69.0, 5338.0], [69.1, 5338.0], [69.2, 5344.0], [69.3, 5345.0], [69.4, 5348.0], [69.5, 5348.0], [69.6, 5350.0], [69.7, 5353.0], [69.8, 5356.0], [69.9, 5356.0], [70.0, 5358.0], [70.1, 5359.0], [70.2, 5359.0], [70.3, 5361.0], [70.4, 5362.0], [70.5, 5363.0], [70.6, 5363.0], [70.7, 5364.0], [70.8, 5369.0], [70.9, 5370.0], [71.0, 5370.0], [71.1, 5373.0], [71.2, 5375.0], [71.3, 5377.0], [71.4, 5377.0], [71.5, 5378.0], [71.6, 5384.0], [71.7, 5384.0], [71.8, 5385.0], [71.9, 5385.0], [72.0, 5392.0], [72.1, 5392.0], [72.2, 5395.0], [72.3, 5396.0], [72.4, 5396.0], [72.5, 5396.0], [72.6, 5399.0], [72.7, 5402.0], [72.8, 5411.0], [72.9, 5411.0], [73.0, 5414.0], [73.1, 5417.0], [73.2, 5417.0], [73.3, 5417.0], [73.4, 5418.0], [73.5, 5425.0], [73.6, 5425.0], [73.7, 5426.0], [73.8, 5429.0], [73.9, 5433.0], [74.0, 5433.0], [74.1, 5436.0], [74.2, 5437.0], [74.3, 5445.0], [74.4, 5445.0], [74.5, 5447.0], [74.6, 5447.0], [74.7, 5449.0], [74.8, 5449.0], [74.9, 5449.0], [75.0, 5455.0], [75.1, 5455.0], [75.2, 5455.0], [75.3, 5456.0], [75.4, 5458.0], [75.5, 5458.0], [75.6, 5459.0], [75.7, 5460.0], [75.8, 5467.0], [75.9, 5467.0], [76.0, 5470.0], [76.1, 5475.0], [76.2, 5476.0], [76.3, 5476.0], [76.4, 5477.0], [76.5, 5482.0], [76.6, 5488.0], [76.7, 5488.0], [76.8, 5490.0], [76.9, 5490.0], [77.0, 5490.0], [77.1, 5490.0], [77.2, 5492.0], [77.3, 5492.0], [77.4, 5492.0], [77.5, 5495.0], [77.6, 5496.0], [77.7, 5498.0], [77.8, 5498.0], [77.9, 5499.0], [78.0, 5500.0], [78.1, 5502.0], [78.2, 5502.0], [78.3, 5506.0], [78.4, 5506.0], [78.5, 5506.0], [78.6, 5510.0], [78.7, 5512.0], [78.8, 5514.0], [78.9, 5514.0], [79.0, 5516.0], [79.1, 5518.0], [79.2, 5522.0], [79.3, 5522.0], [79.4, 5523.0], [79.5, 5525.0], [79.6, 5525.0], [79.7, 5525.0], [79.8, 5529.0], [79.9, 5530.0], [80.0, 5532.0], [80.1, 5532.0], [80.2, 5542.0], [80.3, 5546.0], [80.4, 5546.0], [80.5, 5547.0], [80.6, 5555.0], [80.7, 5556.0], [80.8, 5556.0], [80.9, 5558.0], [81.0, 5560.0], [81.1, 5563.0], [81.2, 5563.0], [81.3, 5567.0], [81.4, 5576.0], [81.5, 5576.0], [81.6, 5576.0], [81.7, 5580.0], [81.8, 5580.0], [81.9, 5580.0], [82.0, 5585.0], [82.1, 5592.0], [82.2, 5595.0], [82.3, 5595.0], [82.4, 5596.0], [82.5, 5598.0], [82.6, 5612.0], [82.7, 5612.0], [82.8, 5612.0], [82.9, 5616.0], [83.0, 5617.0], [83.1, 5617.0], [83.2, 5620.0], [83.3, 5622.0], [83.4, 5622.0], [83.5, 5622.0], [83.6, 5623.0], [83.7, 5623.0], [83.8, 5623.0], [83.9, 5625.0], [84.0, 5626.0], [84.1, 5630.0], [84.2, 5630.0], [84.3, 5630.0], [84.4, 5636.0], [84.5, 5636.0], [84.6, 5636.0], [84.7, 5640.0], [84.8, 5648.0], [84.9, 5650.0], [85.0, 5650.0], [85.1, 5656.0], [85.2, 5656.0], [85.3, 5656.0], [85.4, 5662.0], [85.5, 5663.0], [85.6, 5664.0], [85.7, 5664.0], [85.8, 5677.0], [85.9, 5682.0], [86.0, 5683.0], [86.1, 5683.0], [86.2, 5683.0], [86.3, 5695.0], [86.4, 5695.0], [86.5, 5695.0], [86.6, 5698.0], [86.7, 5709.0], [86.8, 5709.0], [86.9, 5715.0], [87.0, 5724.0], [87.1, 5730.0], [87.2, 5730.0], [87.3, 5740.0], [87.4, 5744.0], [87.5, 5751.0], [87.6, 5751.0], [87.7, 5762.0], [87.8, 5764.0], [87.9, 5767.0], [88.0, 5767.0], [88.1, 5775.0], [88.2, 5776.0], [88.3, 5788.0], [88.4, 5788.0], [88.5, 5803.0], [88.6, 5804.0], [88.7, 5804.0], [88.8, 5814.0], [88.9, 5821.0], [89.0, 5843.0], [89.1, 5843.0], [89.2, 5848.0], [89.3, 5850.0], [89.4, 5854.0], [89.5, 5854.0], [89.6, 5869.0], [89.7, 5880.0], [89.8, 5882.0], [89.9, 5882.0], [90.0, 5911.0], [90.1, 5920.0], [90.2, 5920.0], [90.3, 5925.0], [90.4, 5936.0], [90.5, 5940.0], [90.6, 5940.0], [90.7, 5953.0], [90.8, 5960.0], [90.9, 5962.0], [91.0, 5962.0], [91.1, 5963.0], [91.2, 5985.0], [91.3, 6041.0], [91.4, 6041.0], [91.5, 6071.0], [91.6, 6153.0], [91.7, 6153.0], [91.8, 6171.0], [91.9, 6173.0], [92.0, 6195.0], [92.1, 6195.0], [92.2, 6207.0], [92.3, 6270.0], [92.4, 6289.0], [92.5, 6289.0], [92.6, 6298.0], [92.7, 6326.0], [92.8, 6368.0], [92.9, 6368.0], [93.0, 6376.0], [93.1, 6429.0], [93.2, 6451.0], [93.3, 6451.0], [93.4, 6500.0], [93.5, 6523.0], [93.6, 6523.0], [93.7, 6534.0], [93.8, 6579.0], [93.9, 6587.0], [94.0, 6587.0], [94.1, 6612.0], [94.2, 6663.0], [94.3, 6739.0], [94.4, 6739.0], [94.5, 6768.0], [94.6, 6804.0], [94.7, 6828.0], [94.8, 6828.0], [94.9, 6857.0], [95.0, 6894.0], [95.1, 6894.0], [95.2, 6900.0], [95.3, 6918.0], [95.4, 6932.0], [95.5, 6932.0], [95.6, 6937.0], [95.7, 6937.0], [95.8, 6954.0], [95.9, 6954.0], [96.0, 6975.0], [96.1, 7018.0], [96.2, 7021.0], [96.3, 7021.0], [96.4, 7040.0], [96.5, 7062.0], [96.6, 7097.0], [96.7, 7097.0], [96.8, 7097.0], [96.9, 7101.0], [97.0, 7101.0], [97.1, 7114.0], [97.2, 7146.0], [97.3, 7153.0], [97.4, 7153.0], [97.5, 7168.0], [97.6, 7177.0], [97.7, 7182.0], [97.8, 7182.0], [97.9, 7214.0], [98.0, 7239.0], [98.1, 7241.0], [98.2, 7241.0], [98.3, 7320.0], [98.4, 7330.0], [98.5, 7330.0], [98.6, 7356.0], [98.7, 7363.0], [98.8, 7388.0], [98.9, 7388.0], [99.0, 7402.0], [99.1, 7438.0], [99.2, 7453.0], [99.3, 7453.0], [99.4, 7489.0], [99.5, 7498.0], [99.6, 7646.0], [99.7, 7646.0], [99.8, 7711.0], [99.9, 7811.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1800.0, "maxY": 47.0, "series": [{"data": [[1800.0, 2.0], [1900.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 11.0], [2800.0, 4.0], [2700.0, 9.0], [2900.0, 5.0], [3000.0, 10.0], [3100.0, 11.0], [3300.0, 13.0], [3200.0, 21.0], [3400.0, 24.0], [3500.0, 26.0], [3700.0, 16.0], [3600.0, 11.0], [3800.0, 17.0], [3900.0, 14.0], [4000.0, 14.0], [4200.0, 19.0], [4100.0, 15.0], [4300.0, 12.0], [4500.0, 10.0], [4600.0, 9.0], [4400.0, 24.0], [4700.0, 17.0], [4800.0, 17.0], [5100.0, 47.0], [4900.0, 25.0], [5000.0, 38.0], [5200.0, 47.0], [5300.0, 38.0], [5500.0, 34.0], [5600.0, 30.0], [5400.0, 39.0], [5800.0, 11.0], [5700.0, 13.0], [5900.0, 10.0], [6100.0, 4.0], [6000.0, 2.0], [6200.0, 4.0], [6300.0, 3.0], [6400.0, 2.0], [6500.0, 5.0], [6600.0, 2.0], [6800.0, 4.0], [6900.0, 7.0], [6700.0, 2.0], [7100.0, 7.0], [7000.0, 6.0], [7300.0, 5.0], [7400.0, 5.0], [7200.0, 3.0], [7600.0, 1.0], [7800.0, 1.0], [7700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.02173913043478, "minX": 1.6024854E12, "maxY": 10.0, "series": [{"data": [[1.60248558E12, 10.0], [1.6024854E12, 10.0], [1.6024857E12, 10.0], [1.60248552E12, 10.0], [1.60248564E12, 10.0], [1.60248546E12, 10.0], [1.60248576E12, 9.02173913043478]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248576E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3212.0, "minX": 1.0, "maxY": 4784.669421487599, "series": [{"data": [[8.0, 3240.0], [4.0, 3282.0], [2.0, 3250.0], [1.0, 3640.0], [9.0, 3212.0], [10.0, 4784.669421487599], [5.0, 3285.0], [6.0, 3230.0], [3.0, 3242.0], [7.0, 3239.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 4766.380952380949]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 335.2, "minX": 1.6024854E12, "maxY": 371206.6, "series": [{"data": [[1.60248558E12, 371206.6], [1.6024854E12, 278026.81666666665], [1.6024857E12, 248310.43333333332], [1.60248552E12, 258045.91666666666], [1.60248564E12, 272686.45], [1.60248546E12, 280205.51666666666], [1.60248576E12, 127299.78333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248558E12, 994.05], [1.6024854E12, 514.4833333333333], [1.6024857E12, 979.85], [1.60248552E12, 1018.2166666666667], [1.60248564E12, 863.5666666666667], [1.60248546E12, 817.6666666666666], [1.60248576E12, 335.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248576E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4198.391304347827, "minX": 1.6024854E12, "maxY": 5583.546296296296, "series": [{"data": [[1.60248558E12, 4302.5447761194055], [1.6024854E12, 4499.823529411765], [1.6024857E12, 4601.292307692309], [1.60248552E12, 4537.814814814816], [1.60248564E12, 5384.552631578949], [1.60248546E12, 5583.546296296296], [1.60248576E12, 4198.391304347827]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248576E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4196.978260869566, "minX": 1.6024854E12, "maxY": 5582.138888888886, "series": [{"data": [[1.60248558E12, 4301.126865671641], [1.6024854E12, 4498.0441176470595], [1.6024857E12, 4600.284615384614], [1.60248552E12, 4536.837037037037], [1.60248564E12, 5383.385964912281], [1.60248546E12, 5582.138888888886], [1.60248576E12, 4196.978260869566]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248576E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6024854E12, "maxY": 1.3676470588235294, "series": [{"data": [[1.60248558E12, 0.08955223880597016], [1.6024854E12, 1.3676470588235294], [1.6024857E12, 0.10769230769230773], [1.60248552E12, 0.09629629629629628], [1.60248564E12, 0.10526315789473685], [1.60248546E12, 0.12962962962962962], [1.60248576E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248576E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1844.0, "minX": 1.6024854E12, "maxY": 7811.0, "series": [{"data": [[1.60248558E12, 7330.0], [1.6024854E12, 7811.0], [1.6024857E12, 5744.0], [1.60248552E12, 5764.0], [1.60248564E12, 7363.0], [1.60248546E12, 7711.0], [1.60248576E12, 6195.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248558E12, 2502.4249969422817], [1.6024854E12, 2605.0], [1.6024857E12, 3066.8949998438356], [1.60248552E12, 1849.5999991893768], [1.60248564E12, 4271.014999204874], [1.60248546E12, 4116.0], [1.60248576E12, 2769.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248558E12, 2513.9675012230873], [1.6024854E12, 2605.0], [1.6024857E12, 3067.4845000624655], [1.60248552E12, 1852.6600003242493], [1.60248564E12, 4274.01650031805], [1.60248546E12, 4123.51450098753], [1.60248576E12, 2769.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248558E12, 2508.837498471141], [1.6024854E12, 2605.0], [1.6024857E12, 3067.222499921918], [1.60248552E12, 1851.2999995946884], [1.60248564E12, 4272.682499602437], [1.60248546E12, 4119.372498765588], [1.60248576E12, 2769.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248558E12, 2482.0], [1.6024854E12, 2605.0], [1.6024857E12, 3066.0], [1.60248552E12, 1844.0], [1.60248564E12, 4270.0], [1.60248546E12, 4116.0], [1.60248576E12, 2769.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248558E12, 4090.5], [1.6024854E12, 3816.0], [1.6024857E12, 4908.5], [1.60248552E12, 5032.0], [1.60248564E12, 5299.0], [1.60248546E12, 5465.0], [1.60248576E12, 4394.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248576E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3486.0, "minX": 1.0, "maxY": 5637.5, "series": [{"data": [[1.0, 5411.0], [4.0, 3570.5], [2.0, 5216.5], [5.0, 3486.0], [3.0, 4212.5], [6.0, 5637.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3485.5, "minX": 1.0, "maxY": 5637.5, "series": [{"data": [[1.0, 5410.0], [4.0, 3570.5], [2.0, 5215.0], [5.0, 3485.5], [3.0, 4212.5], [6.0, 5637.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.6024854E12, "maxY": 2.25, "series": [{"data": [[1.60248558E12, 2.2333333333333334], [1.6024854E12, 1.3], [1.6024857E12, 2.1666666666666665], [1.60248552E12, 2.25], [1.60248564E12, 1.9], [1.60248546E12, 1.8], [1.60248576E12, 0.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248576E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.6024854E12, "maxY": 2.25, "series": [{"data": [[1.60248558E12, 2.2333333333333334], [1.6024854E12, 1.1333333333333333], [1.6024857E12, 2.1666666666666665], [1.60248552E12, 2.25], [1.60248564E12, 1.9], [1.60248546E12, 1.8], [1.60248576E12, 0.7666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248576E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.6024854E12, "maxY": 2.25, "series": [{"data": [[1.60248558E12, 2.2333333333333334], [1.6024854E12, 1.1333333333333333], [1.6024857E12, 2.1666666666666665], [1.60248552E12, 2.25], [1.60248564E12, 1.9], [1.60248546E12, 1.8], [1.60248576E12, 0.7666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248576E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.6024854E12, "maxY": 2.25, "series": [{"data": [[1.60248558E12, 2.2333333333333334], [1.6024854E12, 1.1333333333333333], [1.6024857E12, 2.1666666666666665], [1.60248552E12, 2.25], [1.60248564E12, 1.9], [1.60248546E12, 1.8], [1.60248576E12, 0.7666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248576E12, "title": "Total Transactions Per Second"}},
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

