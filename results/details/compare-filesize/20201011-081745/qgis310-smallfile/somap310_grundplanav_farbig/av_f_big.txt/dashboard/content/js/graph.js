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
        data: {"result": {"minY": 2056.0, "minX": 0.0, "maxY": 7973.0, "series": [{"data": [[0.0, 2056.0], [0.1, 2056.0], [0.2, 2070.0], [0.3, 2166.0], [0.4, 2166.0], [0.5, 2224.0], [0.6, 2502.0], [0.7, 2516.0], [0.8, 2516.0], [0.9, 2580.0], [1.0, 2580.0], [1.1, 2660.0], [1.2, 2660.0], [1.3, 2662.0], [1.4, 2677.0], [1.5, 2703.0], [1.6, 2703.0], [1.7, 2705.0], [1.8, 2705.0], [1.9, 2705.0], [2.0, 2742.0], [2.1, 2762.0], [2.2, 2764.0], [2.3, 2764.0], [2.4, 2765.0], [2.5, 2770.0], [2.6, 2772.0], [2.7, 2772.0], [2.8, 2786.0], [2.9, 2794.0], [3.0, 2796.0], [3.1, 2796.0], [3.2, 2799.0], [3.3, 2810.0], [3.4, 2810.0], [3.5, 2833.0], [3.6, 2833.0], [3.7, 2846.0], [3.8, 2846.0], [3.9, 2867.0], [4.0, 2895.0], [4.1, 2898.0], [4.2, 2898.0], [4.3, 2904.0], [4.4, 2913.0], [4.5, 2950.0], [4.6, 2950.0], [4.7, 3034.0], [4.8, 3046.0], [4.9, 3049.0], [5.0, 3049.0], [5.1, 3054.0], [5.2, 3060.0], [5.3, 3060.0], [5.4, 3062.0], [5.5, 3064.0], [5.6, 3066.0], [5.7, 3066.0], [5.8, 3069.0], [5.9, 3072.0], [6.0, 3079.0], [6.1, 3079.0], [6.2, 3079.0], [6.3, 3080.0], [6.4, 3082.0], [6.5, 3082.0], [6.6, 3087.0], [6.7, 3095.0], [6.8, 3095.0], [6.9, 3096.0], [7.0, 3104.0], [7.1, 3123.0], [7.2, 3123.0], [7.3, 3149.0], [7.4, 3158.0], [7.5, 3174.0], [7.6, 3174.0], [7.7, 3184.0], [7.8, 3193.0], [7.9, 3195.0], [8.0, 3195.0], [8.1, 3199.0], [8.2, 3204.0], [8.3, 3217.0], [8.4, 3217.0], [8.5, 3223.0], [8.6, 3230.0], [8.7, 3230.0], [8.8, 3232.0], [8.9, 3233.0], [9.0, 3233.0], [9.1, 3233.0], [9.2, 3246.0], [9.3, 3259.0], [9.4, 3270.0], [9.5, 3270.0], [9.6, 3275.0], [9.7, 3295.0], [9.8, 3309.0], [9.9, 3309.0], [10.0, 3309.0], [10.1, 3312.0], [10.2, 3312.0], [10.3, 3313.0], [10.4, 3319.0], [10.5, 3321.0], [10.6, 3321.0], [10.7, 3321.0], [10.8, 3330.0], [10.9, 3337.0], [11.0, 3337.0], [11.1, 3341.0], [11.2, 3349.0], [11.3, 3352.0], [11.4, 3352.0], [11.5, 3365.0], [11.6, 3368.0], [11.7, 3368.0], [11.8, 3386.0], [11.9, 3404.0], [12.0, 3411.0], [12.1, 3411.0], [12.2, 3428.0], [12.3, 3433.0], [12.4, 3447.0], [12.5, 3447.0], [12.6, 3448.0], [12.7, 3452.0], [12.8, 3456.0], [12.9, 3456.0], [13.0, 3461.0], [13.1, 3464.0], [13.2, 3465.0], [13.3, 3465.0], [13.4, 3476.0], [13.5, 3485.0], [13.6, 3485.0], [13.7, 3496.0], [13.8, 3497.0], [13.9, 3502.0], [14.0, 3502.0], [14.1, 3506.0], [14.2, 3513.0], [14.3, 3519.0], [14.4, 3519.0], [14.5, 3524.0], [14.6, 3528.0], [14.7, 3562.0], [14.8, 3562.0], [14.9, 3582.0], [15.0, 3584.0], [15.1, 3584.0], [15.2, 3589.0], [15.3, 3596.0], [15.4, 3597.0], [15.5, 3597.0], [15.6, 3600.0], [15.7, 3602.0], [15.8, 3605.0], [15.9, 3605.0], [16.0, 3622.0], [16.1, 3628.0], [16.2, 3629.0], [16.3, 3629.0], [16.4, 3631.0], [16.5, 3636.0], [16.6, 3640.0], [16.7, 3640.0], [16.8, 3642.0], [16.9, 3647.0], [17.0, 3647.0], [17.1, 3650.0], [17.2, 3650.0], [17.3, 3652.0], [17.4, 3652.0], [17.5, 3658.0], [17.6, 3660.0], [17.7, 3665.0], [17.8, 3665.0], [17.9, 3665.0], [18.0, 3666.0], [18.1, 3669.0], [18.2, 3669.0], [18.3, 3674.0], [18.4, 3674.0], [18.5, 3674.0], [18.6, 3676.0], [18.7, 3678.0], [18.8, 3691.0], [18.9, 3691.0], [19.0, 3694.0], [19.1, 3695.0], [19.2, 3697.0], [19.3, 3697.0], [19.4, 3698.0], [19.5, 3705.0], [19.6, 3706.0], [19.7, 3706.0], [19.8, 3710.0], [19.9, 3710.0], [20.0, 3715.0], [20.1, 3715.0], [20.2, 3716.0], [20.3, 3718.0], [20.4, 3718.0], [20.5, 3719.0], [20.6, 3722.0], [20.7, 3724.0], [20.8, 3724.0], [20.9, 3727.0], [21.0, 3728.0], [21.1, 3730.0], [21.2, 3730.0], [21.3, 3734.0], [21.4, 3736.0], [21.5, 3763.0], [21.6, 3763.0], [21.7, 3764.0], [21.8, 3771.0], [21.9, 3771.0], [22.0, 3773.0], [22.1, 3774.0], [22.2, 3777.0], [22.3, 3777.0], [22.4, 3788.0], [22.5, 3798.0], [22.6, 3811.0], [22.7, 3811.0], [22.8, 3842.0], [22.9, 3869.0], [23.0, 3875.0], [23.1, 3875.0], [23.2, 3879.0], [23.3, 3889.0], [23.4, 3889.0], [23.5, 3907.0], [23.6, 3907.0], [23.7, 3916.0], [23.8, 3916.0], [23.9, 3923.0], [24.0, 3924.0], [24.1, 3928.0], [24.2, 3928.0], [24.3, 3972.0], [24.4, 3977.0], [24.5, 3990.0], [24.6, 3990.0], [24.7, 3992.0], [24.8, 3993.0], [24.9, 3996.0], [25.0, 3996.0], [25.1, 3997.0], [25.2, 3997.0], [25.3, 3997.0], [25.4, 4017.0], [25.5, 4020.0], [25.6, 4023.0], [25.7, 4023.0], [25.8, 4028.0], [25.9, 4032.0], [26.0, 4033.0], [26.1, 4033.0], [26.2, 4033.0], [26.3, 4033.0], [26.4, 4036.0], [26.5, 4036.0], [26.6, 4044.0], [26.7, 4058.0], [26.8, 4058.0], [26.9, 4058.0], [27.0, 4062.0], [27.1, 4066.0], [27.2, 4066.0], [27.3, 4068.0], [27.4, 4078.0], [27.5, 4132.0], [27.6, 4132.0], [27.7, 4134.0], [27.8, 4135.0], [27.9, 4135.0], [28.0, 4135.0], [28.1, 4145.0], [28.2, 4147.0], [28.3, 4155.0], [28.4, 4155.0], [28.5, 4167.0], [28.6, 4187.0], [28.7, 4187.0], [28.8, 4191.0], [28.9, 4191.0], [29.0, 4202.0], [29.1, 4202.0], [29.2, 4209.0], [29.3, 4212.0], [29.4, 4220.0], [29.5, 4220.0], [29.6, 4235.0], [29.7, 4238.0], [29.8, 4248.0], [29.9, 4248.0], [30.0, 4252.0], [30.1, 4268.0], [30.2, 4268.0], [30.3, 4270.0], [30.4, 4283.0], [30.5, 4287.0], [30.6, 4287.0], [30.7, 4290.0], [30.8, 4291.0], [30.9, 4309.0], [31.0, 4309.0], [31.1, 4311.0], [31.2, 4311.0], [31.3, 4313.0], [31.4, 4313.0], [31.5, 4317.0], [31.6, 4336.0], [31.7, 4336.0], [31.8, 4340.0], [31.9, 4342.0], [32.0, 4342.0], [32.1, 4342.0], [32.2, 4345.0], [32.3, 4349.0], [32.4, 4379.0], [32.5, 4379.0], [32.6, 4381.0], [32.7, 4419.0], [32.8, 4424.0], [32.9, 4424.0], [33.0, 4430.0], [33.1, 4430.0], [33.2, 4439.0], [33.3, 4439.0], [33.4, 4441.0], [33.5, 4454.0], [33.6, 4454.0], [33.7, 4460.0], [33.8, 4466.0], [33.9, 4473.0], [34.0, 4473.0], [34.1, 4475.0], [34.2, 4480.0], [34.3, 4487.0], [34.4, 4487.0], [34.5, 4488.0], [34.6, 4500.0], [34.7, 4517.0], [34.8, 4517.0], [34.9, 4525.0], [35.0, 4534.0], [35.1, 4534.0], [35.2, 4543.0], [35.3, 4543.0], [35.4, 4551.0], [35.5, 4551.0], [35.6, 4554.0], [35.7, 4560.0], [35.8, 4562.0], [35.9, 4562.0], [36.0, 4566.0], [36.1, 4569.0], [36.2, 4571.0], [36.3, 4571.0], [36.4, 4577.0], [36.5, 4593.0], [36.6, 4600.0], [36.7, 4600.0], [36.8, 4603.0], [36.9, 4606.0], [37.0, 4606.0], [37.1, 4607.0], [37.2, 4609.0], [37.3, 4611.0], [37.4, 4611.0], [37.5, 4617.0], [37.6, 4619.0], [37.7, 4620.0], [37.8, 4620.0], [37.9, 4623.0], [38.0, 4629.0], [38.1, 4629.0], [38.2, 4629.0], [38.3, 4631.0], [38.4, 4643.0], [38.5, 4643.0], [38.6, 4648.0], [38.7, 4652.0], [38.8, 4659.0], [38.9, 4659.0], [39.0, 4670.0], [39.1, 4704.0], [39.2, 4706.0], [39.3, 4706.0], [39.4, 4715.0], [39.5, 4726.0], [39.6, 4727.0], [39.7, 4727.0], [39.8, 4737.0], [39.9, 4755.0], [40.0, 4762.0], [40.1, 4762.0], [40.2, 4763.0], [40.3, 4767.0], [40.4, 4767.0], [40.5, 4770.0], [40.6, 4778.0], [40.7, 4787.0], [40.8, 4787.0], [40.9, 4793.0], [41.0, 4795.0], [41.1, 4796.0], [41.2, 4796.0], [41.3, 4803.0], [41.4, 4814.0], [41.5, 4827.0], [41.6, 4827.0], [41.7, 4835.0], [41.8, 4839.0], [41.9, 4839.0], [42.0, 4875.0], [42.1, 4876.0], [42.2, 4879.0], [42.3, 4879.0], [42.4, 4882.0], [42.5, 4882.0], [42.6, 4883.0], [42.7, 4883.0], [42.8, 4883.0], [42.9, 4885.0], [43.0, 4891.0], [43.1, 4891.0], [43.2, 4904.0], [43.3, 4931.0], [43.4, 4931.0], [43.5, 4941.0], [43.6, 4942.0], [43.7, 4948.0], [43.8, 4948.0], [43.9, 4954.0], [44.0, 4959.0], [44.1, 4960.0], [44.2, 4960.0], [44.3, 4966.0], [44.4, 4967.0], [44.5, 4980.0], [44.6, 4980.0], [44.7, 4983.0], [44.8, 4993.0], [44.9, 4996.0], [45.0, 4996.0], [45.1, 5009.0], [45.2, 5016.0], [45.3, 5016.0], [45.4, 5023.0], [45.5, 5023.0], [45.6, 5024.0], [45.7, 5024.0], [45.8, 5027.0], [45.9, 5029.0], [46.0, 5029.0], [46.1, 5029.0], [46.2, 5030.0], [46.3, 5036.0], [46.4, 5036.0], [46.5, 5036.0], [46.6, 5037.0], [46.7, 5037.0], [46.8, 5037.0], [46.9, 5047.0], [47.0, 5048.0], [47.1, 5052.0], [47.2, 5052.0], [47.3, 5054.0], [47.4, 5055.0], [47.5, 5057.0], [47.6, 5057.0], [47.7, 5059.0], [47.8, 5070.0], [47.9, 5071.0], [48.0, 5071.0], [48.1, 5076.0], [48.2, 5077.0], [48.3, 5080.0], [48.4, 5080.0], [48.5, 5081.0], [48.6, 5082.0], [48.7, 5082.0], [48.8, 5082.0], [48.9, 5082.0], [49.0, 5086.0], [49.1, 5086.0], [49.2, 5089.0], [49.3, 5091.0], [49.4, 5091.0], [49.5, 5091.0], [49.6, 5091.0], [49.7, 5092.0], [49.8, 5093.0], [49.9, 5093.0], [50.0, 5100.0], [50.1, 5101.0], [50.2, 5101.0], [50.3, 5107.0], [50.4, 5117.0], [50.5, 5136.0], [50.6, 5136.0], [50.7, 5139.0], [50.8, 5140.0], [50.9, 5141.0], [51.0, 5141.0], [51.1, 5144.0], [51.2, 5144.0], [51.3, 5146.0], [51.4, 5146.0], [51.5, 5150.0], [51.6, 5155.0], [51.7, 5155.0], [51.8, 5155.0], [51.9, 5163.0], [52.0, 5164.0], [52.1, 5164.0], [52.2, 5164.0], [52.3, 5164.0], [52.4, 5168.0], [52.5, 5168.0], [52.6, 5171.0], [52.7, 5175.0], [52.8, 5175.0], [52.9, 5175.0], [53.0, 5177.0], [53.1, 5178.0], [53.2, 5184.0], [53.3, 5184.0], [53.4, 5189.0], [53.5, 5191.0], [53.6, 5191.0], [53.7, 5192.0], [53.8, 5196.0], [53.9, 5201.0], [54.0, 5201.0], [54.1, 5203.0], [54.2, 5204.0], [54.3, 5204.0], [54.4, 5204.0], [54.5, 5206.0], [54.6, 5207.0], [54.7, 5208.0], [54.8, 5208.0], [54.9, 5212.0], [55.0, 5214.0], [55.1, 5214.0], [55.2, 5215.0], [55.3, 5219.0], [55.4, 5223.0], [55.5, 5223.0], [55.6, 5228.0], [55.7, 5228.0], [55.8, 5231.0], [55.9, 5231.0], [56.0, 5233.0], [56.1, 5238.0], [56.2, 5241.0], [56.3, 5241.0], [56.4, 5241.0], [56.5, 5242.0], [56.6, 5244.0], [56.7, 5244.0], [56.8, 5245.0], [56.9, 5246.0], [57.0, 5246.0], [57.1, 5250.0], [57.2, 5252.0], [57.3, 5255.0], [57.4, 5255.0], [57.5, 5256.0], [57.6, 5256.0], [57.7, 5257.0], [57.8, 5257.0], [57.9, 5260.0], [58.0, 5269.0], [58.1, 5270.0], [58.2, 5270.0], [58.3, 5270.0], [58.4, 5274.0], [58.5, 5274.0], [58.6, 5275.0], [58.7, 5275.0], [58.8, 5277.0], [58.9, 5277.0], [59.0, 5278.0], [59.1, 5280.0], [59.2, 5284.0], [59.3, 5284.0], [59.4, 5285.0], [59.5, 5286.0], [59.6, 5288.0], [59.7, 5288.0], [59.8, 5289.0], [59.9, 5292.0], [60.0, 5301.0], [60.1, 5301.0], [60.2, 5302.0], [60.3, 5302.0], [60.4, 5302.0], [60.5, 5307.0], [60.6, 5309.0], [60.7, 5313.0], [60.8, 5313.0], [60.9, 5313.0], [61.0, 5314.0], [61.1, 5317.0], [61.2, 5317.0], [61.3, 5319.0], [61.4, 5320.0], [61.5, 5324.0], [61.6, 5324.0], [61.7, 5324.0], [61.8, 5325.0], [61.9, 5325.0], [62.0, 5327.0], [62.1, 5327.0], [62.2, 5327.0], [62.3, 5327.0], [62.4, 5328.0], [62.5, 5335.0], [62.6, 5336.0], [62.7, 5336.0], [62.8, 5339.0], [62.9, 5342.0], [63.0, 5345.0], [63.1, 5345.0], [63.2, 5348.0], [63.3, 5349.0], [63.4, 5349.0], [63.5, 5358.0], [63.6, 5360.0], [63.7, 5362.0], [63.8, 5362.0], [63.9, 5364.0], [64.0, 5365.0], [64.1, 5365.0], [64.2, 5365.0], [64.3, 5366.0], [64.4, 5366.0], [64.5, 5367.0], [64.6, 5367.0], [64.7, 5375.0], [64.8, 5378.0], [64.9, 5379.0], [65.0, 5379.0], [65.1, 5379.0], [65.2, 5386.0], [65.3, 5386.0], [65.4, 5392.0], [65.5, 5395.0], [65.6, 5396.0], [65.7, 5396.0], [65.8, 5397.0], [65.9, 5400.0], [66.0, 5400.0], [66.1, 5400.0], [66.2, 5407.0], [66.3, 5408.0], [66.4, 5409.0], [66.5, 5409.0], [66.6, 5410.0], [66.7, 5415.0], [66.8, 5415.0], [66.9, 5416.0], [67.0, 5421.0], [67.1, 5424.0], [67.2, 5424.0], [67.3, 5426.0], [67.4, 5426.0], [67.5, 5430.0], [67.6, 5430.0], [67.7, 5437.0], [67.8, 5440.0], [67.9, 5442.0], [68.0, 5442.0], [68.1, 5445.0], [68.2, 5446.0], [68.3, 5449.0], [68.4, 5449.0], [68.5, 5450.0], [68.6, 5454.0], [68.7, 5454.0], [68.8, 5455.0], [68.9, 5457.0], [69.0, 5459.0], [69.1, 5459.0], [69.2, 5460.0], [69.3, 5464.0], [69.4, 5469.0], [69.5, 5469.0], [69.6, 5469.0], [69.7, 5474.0], [69.8, 5476.0], [69.9, 5476.0], [70.0, 5480.0], [70.1, 5482.0], [70.2, 5482.0], [70.3, 5483.0], [70.4, 5485.0], [70.5, 5486.0], [70.6, 5486.0], [70.7, 5490.0], [70.8, 5490.0], [70.9, 5493.0], [71.0, 5493.0], [71.1, 5496.0], [71.2, 5499.0], [71.3, 5505.0], [71.4, 5505.0], [71.5, 5506.0], [71.6, 5507.0], [71.7, 5507.0], [71.8, 5507.0], [71.9, 5508.0], [72.0, 5510.0], [72.1, 5510.0], [72.2, 5510.0], [72.3, 5511.0], [72.4, 5514.0], [72.5, 5514.0], [72.6, 5517.0], [72.7, 5518.0], [72.8, 5521.0], [72.9, 5521.0], [73.0, 5527.0], [73.1, 5528.0], [73.2, 5531.0], [73.3, 5531.0], [73.4, 5532.0], [73.5, 5533.0], [73.6, 5533.0], [73.7, 5542.0], [73.8, 5544.0], [73.9, 5545.0], [74.0, 5545.0], [74.1, 5548.0], [74.2, 5552.0], [74.3, 5553.0], [74.4, 5553.0], [74.5, 5554.0], [74.6, 5555.0], [74.7, 5557.0], [74.8, 5557.0], [74.9, 5561.0], [75.0, 5563.0], [75.1, 5563.0], [75.2, 5564.0], [75.3, 5566.0], [75.4, 5568.0], [75.5, 5568.0], [75.6, 5572.0], [75.7, 5573.0], [75.8, 5574.0], [75.9, 5574.0], [76.0, 5575.0], [76.1, 5575.0], [76.2, 5582.0], [76.3, 5582.0], [76.4, 5592.0], [76.5, 5595.0], [76.6, 5596.0], [76.7, 5596.0], [76.8, 5601.0], [76.9, 5606.0], [77.0, 5606.0], [77.1, 5608.0], [77.2, 5608.0], [77.3, 5621.0], [77.4, 5621.0], [77.5, 5621.0], [77.6, 5622.0], [77.7, 5625.0], [77.8, 5625.0], [77.9, 5625.0], [78.0, 5628.0], [78.1, 5628.0], [78.2, 5628.0], [78.3, 5630.0], [78.4, 5634.0], [78.5, 5634.0], [78.6, 5637.0], [78.7, 5643.0], [78.8, 5645.0], [78.9, 5645.0], [79.0, 5648.0], [79.1, 5654.0], [79.2, 5656.0], [79.3, 5656.0], [79.4, 5659.0], [79.5, 5665.0], [79.6, 5667.0], [79.7, 5667.0], [79.8, 5669.0], [79.9, 5678.0], [80.0, 5682.0], [80.1, 5682.0], [80.2, 5682.0], [80.3, 5686.0], [80.4, 5686.0], [80.5, 5686.0], [80.6, 5686.0], [80.7, 5691.0], [80.8, 5691.0], [80.9, 5691.0], [81.0, 5695.0], [81.1, 5698.0], [81.2, 5698.0], [81.3, 5709.0], [81.4, 5709.0], [81.5, 5714.0], [81.6, 5714.0], [81.7, 5719.0], [81.8, 5722.0], [81.9, 5722.0], [82.0, 5723.0], [82.1, 5725.0], [82.2, 5727.0], [82.3, 5727.0], [82.4, 5727.0], [82.5, 5733.0], [82.6, 5735.0], [82.7, 5735.0], [82.8, 5736.0], [82.9, 5737.0], [83.0, 5737.0], [83.1, 5737.0], [83.2, 5738.0], [83.3, 5745.0], [83.4, 5745.0], [83.5, 5746.0], [83.6, 5747.0], [83.7, 5753.0], [83.8, 5753.0], [83.9, 5761.0], [84.0, 5762.0], [84.1, 5765.0], [84.2, 5765.0], [84.3, 5767.0], [84.4, 5768.0], [84.5, 5777.0], [84.6, 5777.0], [84.7, 5783.0], [84.8, 5783.0], [84.9, 5783.0], [85.0, 5783.0], [85.1, 5785.0], [85.2, 5787.0], [85.3, 5787.0], [85.4, 5790.0], [85.5, 5795.0], [85.6, 5798.0], [85.7, 5798.0], [85.8, 5803.0], [85.9, 5807.0], [86.0, 5812.0], [86.1, 5812.0], [86.2, 5813.0], [86.3, 5814.0], [86.4, 5815.0], [86.5, 5815.0], [86.6, 5816.0], [86.7, 5825.0], [86.8, 5825.0], [86.9, 5829.0], [87.0, 5830.0], [87.1, 5837.0], [87.2, 5837.0], [87.3, 5844.0], [87.4, 5846.0], [87.5, 5848.0], [87.6, 5848.0], [87.7, 5849.0], [87.8, 5853.0], [87.9, 5856.0], [88.0, 5856.0], [88.1, 5859.0], [88.2, 5861.0], [88.3, 5867.0], [88.4, 5867.0], [88.5, 5873.0], [88.6, 5873.0], [88.7, 5873.0], [88.8, 5928.0], [88.9, 5954.0], [89.0, 5960.0], [89.1, 5960.0], [89.2, 5961.0], [89.3, 5964.0], [89.4, 5971.0], [89.5, 5971.0], [89.6, 5977.0], [89.7, 5993.0], [89.8, 6066.0], [89.9, 6066.0], [90.0, 6066.0], [90.1, 6088.0], [90.2, 6088.0], [90.3, 6090.0], [90.4, 6098.0], [90.5, 6174.0], [90.6, 6174.0], [90.7, 6208.0], [90.8, 6219.0], [90.9, 6238.0], [91.0, 6238.0], [91.1, 6276.0], [91.2, 6277.0], [91.3, 6296.0], [91.4, 6296.0], [91.5, 6330.0], [91.6, 6337.0], [91.7, 6337.0], [91.8, 6339.0], [91.9, 6368.0], [92.0, 6380.0], [92.1, 6380.0], [92.2, 6435.0], [92.3, 6459.0], [92.4, 6531.0], [92.5, 6531.0], [92.6, 6559.0], [92.7, 6587.0], [92.8, 6593.0], [92.9, 6593.0], [93.0, 6635.0], [93.1, 6652.0], [93.2, 6678.0], [93.3, 6678.0], [93.4, 6689.0], [93.5, 6709.0], [93.6, 6709.0], [93.7, 6716.0], [93.8, 6751.0], [93.9, 6767.0], [94.0, 6767.0], [94.1, 6784.0], [94.2, 6852.0], [94.3, 6861.0], [94.4, 6861.0], [94.5, 6864.0], [94.6, 6887.0], [94.7, 6955.0], [94.8, 6955.0], [94.9, 6968.0], [95.0, 7013.0], [95.1, 7013.0], [95.2, 7024.0], [95.3, 7051.0], [95.4, 7065.0], [95.5, 7065.0], [95.6, 7069.0], [95.7, 7084.0], [95.8, 7124.0], [95.9, 7124.0], [96.0, 7153.0], [96.1, 7157.0], [96.2, 7207.0], [96.3, 7207.0], [96.4, 7235.0], [96.5, 7257.0], [96.6, 7260.0], [96.7, 7260.0], [96.8, 7278.0], [96.9, 7312.0], [97.0, 7312.0], [97.1, 7335.0], [97.2, 7341.0], [97.3, 7393.0], [97.4, 7393.0], [97.5, 7421.0], [97.6, 7467.0], [97.7, 7475.0], [97.8, 7475.0], [97.9, 7478.0], [98.0, 7485.0], [98.1, 7485.0], [98.2, 7485.0], [98.3, 7499.0], [98.4, 7505.0], [98.5, 7505.0], [98.6, 7591.0], [98.7, 7621.0], [98.8, 7641.0], [98.9, 7641.0], [99.0, 7678.0], [99.1, 7710.0], [99.2, 7754.0], [99.3, 7754.0], [99.4, 7772.0], [99.5, 7784.0], [99.6, 7790.0], [99.7, 7790.0], [99.8, 7934.0], [99.9, 7973.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2000.0, "maxY": 45.0, "series": [{"data": [[2000.0, 2.0], [2100.0, 1.0], [2200.0, 1.0], [2500.0, 4.0], [2600.0, 3.0], [2800.0, 7.0], [2700.0, 13.0], [2900.0, 3.0], [3000.0, 17.0], [3100.0, 9.0], [3200.0, 12.0], [3300.0, 15.0], [3400.0, 15.0], [3500.0, 12.0], [3600.0, 29.0], [3700.0, 23.0], [3800.0, 6.0], [3900.0, 14.0], [4000.0, 16.0], [4200.0, 14.0], [4300.0, 13.0], [4100.0, 11.0], [4500.0, 15.0], [4400.0, 14.0], [4600.0, 18.0], [4700.0, 16.0], [4800.0, 14.0], [4900.0, 14.0], [5000.0, 36.0], [5100.0, 29.0], [5200.0, 45.0], [5300.0, 43.0], [5600.0, 33.0], [5400.0, 40.0], [5500.0, 40.0], [5800.0, 22.0], [5700.0, 33.0], [5900.0, 8.0], [6000.0, 5.0], [6100.0, 1.0], [6300.0, 5.0], [6200.0, 6.0], [6500.0, 4.0], [6600.0, 4.0], [6400.0, 2.0], [6900.0, 2.0], [6700.0, 5.0], [6800.0, 4.0], [7000.0, 6.0], [7100.0, 3.0], [7200.0, 5.0], [7400.0, 7.0], [7300.0, 4.0], [7600.0, 3.0], [7500.0, 2.0], [7700.0, 5.0], [7900.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.62809917355372, "minX": 1.60241748E12, "maxY": 10.0, "series": [{"data": [[1.60241772E12, 10.0], [1.60241754E12, 10.0], [1.60241784E12, 9.62809917355372], [1.60241766E12, 10.0], [1.60241748E12, 10.0], [1.60241778E12, 10.0], [1.6024176E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241784E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3270.0, "minX": 1.0, "maxY": 4904.119834710744, "series": [{"data": [[8.0, 3352.0], [4.0, 3337.0], [2.0, 3270.0], [1.0, 3602.0], [9.0, 3330.0], [10.0, 4904.119834710744], [5.0, 3368.0], [6.0, 3321.0], [3.0, 3309.0], [7.0, 3349.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 4885.2095238095235]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 113.28333333333333, "minX": 1.60241748E12, "maxY": 367353.9, "series": [{"data": [[1.60241772E12, 282281.8], [1.60241754E12, 367353.9], [1.60241784E12, 251212.06666666668], [1.60241766E12, 336248.7833333333], [1.60241748E12, 84377.13333333333], [1.60241778E12, 257641.43333333332], [1.6024176E12, 256663.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60241772E12, 893.9333333333333], [1.60241754E12, 871.2833333333333], [1.60241784E12, 899.6], [1.60241766E12, 1081.65], [1.60241748E12, 113.28333333333333], [1.60241778E12, 832.0], [1.6024176E12, 831.2833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241784E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4193.924137931032, "minX": 1.60241748E12, "maxY": 5436.999999999997, "series": [{"data": [[1.60241772E12, 4989.470588235294], [1.60241754E12, 5328.121739130434], [1.60241784E12, 4227.140495867767], [1.60241766E12, 4193.924137931032], [1.60241748E12, 4589.0], [1.60241778E12, 5433.090909090906], [1.6024176E12, 5436.999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241784E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4192.86896551724, "minX": 1.60241748E12, "maxY": 5435.8545454545465, "series": [{"data": [[1.60241772E12, 4988.327731092435], [1.60241754E12, 5326.652173913042], [1.60241784E12, 4226.181818181817], [1.60241766E12, 4192.86896551724], [1.60241748E12, 4586.599999999999], [1.60241778E12, 5432.009090909091], [1.6024176E12, 5435.8545454545465]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241784E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03636363636363636, "minX": 1.60241748E12, "maxY": 7.200000000000001, "series": [{"data": [[1.60241772E12, 0.10084033613445384], [1.60241754E12, 0.12173913043478261], [1.60241784E12, 0.0826446280991735], [1.60241766E12, 0.055172413793103475], [1.60241748E12, 7.200000000000001], [1.60241778E12, 0.1363636363636364], [1.6024176E12, 0.03636363636363636]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241784E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2056.0, "minX": 1.60241748E12, "maxY": 7973.0, "series": [{"data": [[1.60241772E12, 7641.0], [1.60241754E12, 7973.0], [1.60241784E12, 6368.0], [1.60241766E12, 7485.0], [1.60241748E12, 6098.0], [1.60241778E12, 5856.0], [1.6024176E12, 5859.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60241772E12, 2586.559997653961], [1.60241754E12, 2661.891998810768], [1.60241784E12, 2747.2919984292985], [1.60241766E12, 2060.3959995126725], [1.60241748E12, 2516.0], [1.60241778E12, 4875.0], [1.6024176E12, 4931.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60241772E12, 2595.4160009384154], [1.60241754E12, 2666.381200475693], [1.60241784E12, 2753.2212006282807], [1.60241766E12, 2062.235600194931], [1.60241748E12, 2516.0], [1.60241778E12, 4875.098900010586], [1.6024176E12, 4935.846100518704]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60241772E12, 2591.4799988269806], [1.60241754E12, 2664.385999405384], [1.60241784E12, 2750.5859992146493], [1.60241766E12, 2061.417999756336], [1.60241748E12, 2516.0], [1.60241778E12, 4875.054499986768], [1.6024176E12, 4933.6704993516205]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60241772E12, 2580.0], [1.60241754E12, 2660.0], [1.60241784E12, 2742.0], [1.60241766E12, 2056.0], [1.60241748E12, 2516.0], [1.60241778E12, 4875.0], [1.6024176E12, 4931.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60241772E12, 5168.0], [1.60241754E12, 5233.0], [1.60241784E12, 4212.0], [1.60241766E12, 4033.0], [1.60241748E12, 4569.0], [1.60241778E12, 5452.0], [1.6024176E12, 5435.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241784E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3656.0, "minX": 1.0, "maxY": 5446.0, "series": [{"data": [[2.0, 5315.5], [1.0, 5446.0], [4.0, 3656.0], [5.0, 3658.0], [3.0, 4399.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3656.0, "minX": 1.0, "maxY": 5444.0, "series": [{"data": [[2.0, 5315.5], [1.0, 5444.0], [4.0, 3656.0], [5.0, 3658.0], [3.0, 4398.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.60241748E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60241772E12, 1.9833333333333334], [1.60241754E12, 1.9166666666666667], [1.60241784E12, 1.85], [1.60241766E12, 2.4166666666666665], [1.60241748E12, 0.4166666666666667], [1.60241778E12, 1.8333333333333333], [1.6024176E12, 1.8333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241784E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60241748E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60241772E12, 1.9833333333333334], [1.60241754E12, 1.9166666666666667], [1.60241784E12, 2.0166666666666666], [1.60241766E12, 2.4166666666666665], [1.60241748E12, 0.25], [1.60241778E12, 1.8333333333333333], [1.6024176E12, 1.8333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241784E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60241748E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60241772E12, 1.9833333333333334], [1.60241754E12, 1.9166666666666667], [1.60241784E12, 2.0166666666666666], [1.60241766E12, 2.4166666666666665], [1.60241748E12, 0.25], [1.60241778E12, 1.8333333333333333], [1.6024176E12, 1.8333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241784E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60241748E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60241772E12, 1.9833333333333334], [1.60241754E12, 1.9166666666666667], [1.60241784E12, 2.0166666666666666], [1.60241766E12, 2.4166666666666665], [1.60241748E12, 0.25], [1.60241778E12, 1.8333333333333333], [1.6024176E12, 1.8333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241784E12, "title": "Total Transactions Per Second"}},
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

