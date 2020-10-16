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
        data: {"result": {"minY": 2282.0, "minX": 0.0, "maxY": 8296.0, "series": [{"data": [[0.0, 2282.0], [0.1, 2282.0], [0.2, 2320.0], [0.3, 2632.0], [0.4, 2632.0], [0.5, 2670.0], [0.6, 2736.0], [0.7, 2777.0], [0.8, 2777.0], [0.9, 2839.0], [1.0, 2907.0], [1.1, 2969.0], [1.2, 2969.0], [1.3, 2993.0], [1.4, 2998.0], [1.5, 3023.0], [1.6, 3023.0], [1.7, 3042.0], [1.8, 3045.0], [1.9, 3045.0], [2.0, 3046.0], [2.1, 3049.0], [2.2, 3059.0], [2.3, 3059.0], [2.4, 3076.0], [2.5, 3079.0], [2.6, 3083.0], [2.7, 3083.0], [2.8, 3086.0], [2.9, 3086.0], [3.0, 3090.0], [3.1, 3090.0], [3.2, 3099.0], [3.3, 3118.0], [3.4, 3118.0], [3.5, 3136.0], [3.6, 3155.0], [3.7, 3164.0], [3.8, 3164.0], [3.9, 3166.0], [4.0, 3168.0], [4.1, 3170.0], [4.2, 3170.0], [4.3, 3179.0], [4.4, 3181.0], [4.5, 3189.0], [4.6, 3189.0], [4.7, 3194.0], [4.8, 3196.0], [4.9, 3199.0], [5.0, 3199.0], [5.1, 3205.0], [5.2, 3207.0], [5.3, 3207.0], [5.4, 3211.0], [5.5, 3230.0], [5.6, 3236.0], [5.7, 3236.0], [5.8, 3237.0], [5.9, 3248.0], [6.0, 3270.0], [6.1, 3270.0], [6.2, 3281.0], [6.3, 3284.0], [6.4, 3293.0], [6.5, 3293.0], [6.6, 3311.0], [6.7, 3313.0], [6.8, 3313.0], [6.9, 3314.0], [7.0, 3323.0], [7.1, 3324.0], [7.2, 3324.0], [7.3, 3335.0], [7.4, 3352.0], [7.5, 3354.0], [7.6, 3354.0], [7.7, 3365.0], [7.8, 3368.0], [7.9, 3372.0], [8.0, 3372.0], [8.1, 3379.0], [8.2, 3382.0], [8.3, 3393.0], [8.4, 3393.0], [8.5, 3409.0], [8.6, 3418.0], [8.7, 3418.0], [8.8, 3421.0], [8.9, 3422.0], [9.0, 3425.0], [9.1, 3425.0], [9.2, 3430.0], [9.3, 3435.0], [9.4, 3439.0], [9.5, 3439.0], [9.6, 3439.0], [9.7, 3442.0], [9.8, 3446.0], [9.9, 3446.0], [10.0, 3454.0], [10.1, 3464.0], [10.2, 3464.0], [10.3, 3472.0], [10.4, 3474.0], [10.5, 3482.0], [10.6, 3482.0], [10.7, 3482.0], [10.8, 3484.0], [10.9, 3489.0], [11.0, 3489.0], [11.1, 3493.0], [11.2, 3495.0], [11.3, 3503.0], [11.4, 3503.0], [11.5, 3517.0], [11.6, 3538.0], [11.7, 3538.0], [11.8, 3540.0], [11.9, 3548.0], [12.0, 3549.0], [12.1, 3549.0], [12.2, 3552.0], [12.3, 3559.0], [12.4, 3571.0], [12.5, 3571.0], [12.6, 3576.0], [12.7, 3588.0], [12.8, 3590.0], [12.9, 3590.0], [13.0, 3595.0], [13.1, 3605.0], [13.2, 3618.0], [13.3, 3618.0], [13.4, 3621.0], [13.5, 3633.0], [13.6, 3633.0], [13.7, 3634.0], [13.8, 3637.0], [13.9, 3637.0], [14.0, 3637.0], [14.1, 3640.0], [14.2, 3651.0], [14.3, 3662.0], [14.4, 3662.0], [14.5, 3673.0], [14.6, 3675.0], [14.7, 3685.0], [14.8, 3685.0], [14.9, 3701.0], [15.0, 3726.0], [15.1, 3726.0], [15.2, 3741.0], [15.3, 3751.0], [15.4, 3759.0], [15.5, 3759.0], [15.6, 3765.0], [15.7, 3765.0], [15.8, 3771.0], [15.9, 3771.0], [16.0, 3783.0], [16.1, 3785.0], [16.2, 3787.0], [16.3, 3787.0], [16.4, 3792.0], [16.5, 3793.0], [16.6, 3795.0], [16.7, 3795.0], [16.8, 3800.0], [16.9, 3808.0], [17.0, 3808.0], [17.1, 3828.0], [17.2, 3837.0], [17.3, 3843.0], [17.4, 3843.0], [17.5, 3858.0], [17.6, 3858.0], [17.7, 3869.0], [17.8, 3869.0], [17.9, 3895.0], [18.0, 3897.0], [18.1, 3904.0], [18.2, 3904.0], [18.3, 3921.0], [18.4, 3941.0], [18.5, 3941.0], [18.6, 3958.0], [18.7, 3959.0], [18.8, 3983.0], [18.9, 3983.0], [19.0, 3984.0], [19.1, 3985.0], [19.2, 3990.0], [19.3, 3990.0], [19.4, 3994.0], [19.5, 3995.0], [19.6, 3996.0], [19.7, 3996.0], [19.8, 4003.0], [19.9, 4012.0], [20.0, 4018.0], [20.1, 4018.0], [20.2, 4019.0], [20.3, 4023.0], [20.4, 4023.0], [20.5, 4028.0], [20.6, 4028.0], [20.7, 4033.0], [20.8, 4033.0], [20.9, 4048.0], [21.0, 4058.0], [21.1, 4058.0], [21.2, 4058.0], [21.3, 4059.0], [21.4, 4064.0], [21.5, 4074.0], [21.6, 4074.0], [21.7, 4078.0], [21.8, 4084.0], [21.9, 4084.0], [22.0, 4085.0], [22.1, 4086.0], [22.2, 4089.0], [22.3, 4089.0], [22.4, 4091.0], [22.5, 4100.0], [22.6, 4107.0], [22.7, 4107.0], [22.8, 4116.0], [22.9, 4117.0], [23.0, 4126.0], [23.1, 4126.0], [23.2, 4137.0], [23.3, 4140.0], [23.4, 4140.0], [23.5, 4148.0], [23.6, 4164.0], [23.7, 4167.0], [23.8, 4167.0], [23.9, 4169.0], [24.0, 4170.0], [24.1, 4176.0], [24.2, 4176.0], [24.3, 4176.0], [24.4, 4177.0], [24.5, 4183.0], [24.6, 4183.0], [24.7, 4186.0], [24.8, 4231.0], [24.9, 4232.0], [25.0, 4232.0], [25.1, 4233.0], [25.2, 4252.0], [25.3, 4252.0], [25.4, 4255.0], [25.5, 4260.0], [25.6, 4263.0], [25.7, 4263.0], [25.8, 4275.0], [25.9, 4297.0], [26.0, 4305.0], [26.1, 4305.0], [26.2, 4310.0], [26.3, 4311.0], [26.4, 4315.0], [26.5, 4315.0], [26.6, 4317.0], [26.7, 4325.0], [26.8, 4325.0], [26.9, 4330.0], [27.0, 4331.0], [27.1, 4377.0], [27.2, 4377.0], [27.3, 4380.0], [27.4, 4388.0], [27.5, 4393.0], [27.6, 4393.0], [27.7, 4394.0], [27.8, 4397.0], [27.9, 4404.0], [28.0, 4404.0], [28.1, 4408.0], [28.2, 4428.0], [28.3, 4436.0], [28.4, 4436.0], [28.5, 4438.0], [28.6, 4440.0], [28.7, 4440.0], [28.8, 4446.0], [28.9, 4450.0], [29.0, 4466.0], [29.1, 4466.0], [29.2, 4466.0], [29.3, 4466.0], [29.4, 4471.0], [29.5, 4471.0], [29.6, 4475.0], [29.7, 4483.0], [29.8, 4488.0], [29.9, 4488.0], [30.0, 4493.0], [30.1, 4494.0], [30.2, 4494.0], [30.3, 4498.0], [30.4, 4499.0], [30.5, 4502.0], [30.6, 4502.0], [30.7, 4503.0], [30.8, 4504.0], [30.9, 4505.0], [31.0, 4505.0], [31.1, 4512.0], [31.2, 4530.0], [31.3, 4530.0], [31.4, 4530.0], [31.5, 4541.0], [31.6, 4549.0], [31.7, 4549.0], [31.8, 4565.0], [31.9, 4577.0], [32.0, 4577.0], [32.1, 4577.0], [32.2, 4598.0], [32.3, 4601.0], [32.4, 4613.0], [32.5, 4613.0], [32.6, 4622.0], [32.7, 4623.0], [32.8, 4628.0], [32.9, 4628.0], [33.0, 4636.0], [33.1, 4645.0], [33.2, 4653.0], [33.3, 4653.0], [33.4, 4661.0], [33.5, 4666.0], [33.6, 4666.0], [33.7, 4667.0], [33.8, 4678.0], [33.9, 4679.0], [34.0, 4679.0], [34.1, 4694.0], [34.2, 4694.0], [34.3, 4701.0], [34.4, 4701.0], [34.5, 4705.0], [34.6, 4730.0], [34.7, 4731.0], [34.8, 4731.0], [34.9, 4757.0], [35.0, 4766.0], [35.1, 4766.0], [35.2, 4767.0], [35.3, 4786.0], [35.4, 4801.0], [35.5, 4801.0], [35.6, 4806.0], [35.7, 4811.0], [35.8, 4815.0], [35.9, 4815.0], [36.0, 4822.0], [36.1, 4830.0], [36.2, 4833.0], [36.3, 4833.0], [36.4, 4843.0], [36.5, 4856.0], [36.6, 4864.0], [36.7, 4864.0], [36.8, 4868.0], [36.9, 4872.0], [37.0, 4872.0], [37.1, 4873.0], [37.2, 4875.0], [37.3, 4876.0], [37.4, 4876.0], [37.5, 4878.0], [37.6, 4882.0], [37.7, 4882.0], [37.8, 4882.0], [37.9, 4889.0], [38.0, 4898.0], [38.1, 4912.0], [38.2, 4912.0], [38.3, 4921.0], [38.4, 4925.0], [38.5, 4925.0], [38.6, 4943.0], [38.7, 4945.0], [38.8, 4957.0], [38.9, 4957.0], [39.0, 4957.0], [39.1, 4967.0], [39.2, 4968.0], [39.3, 4968.0], [39.4, 4969.0], [39.5, 4972.0], [39.6, 4986.0], [39.7, 4986.0], [39.8, 4989.0], [39.9, 5001.0], [40.0, 5010.0], [40.1, 5010.0], [40.2, 5011.0], [40.3, 5014.0], [40.4, 5014.0], [40.5, 5017.0], [40.6, 5022.0], [40.7, 5024.0], [40.8, 5024.0], [40.9, 5027.0], [41.0, 5029.0], [41.1, 5037.0], [41.2, 5037.0], [41.3, 5046.0], [41.4, 5050.0], [41.5, 5050.0], [41.6, 5050.0], [41.7, 5052.0], [41.8, 5062.0], [41.9, 5062.0], [42.0, 5063.0], [42.1, 5065.0], [42.2, 5067.0], [42.3, 5067.0], [42.4, 5072.0], [42.5, 5073.0], [42.6, 5078.0], [42.7, 5078.0], [42.8, 5080.0], [42.9, 5085.0], [43.0, 5088.0], [43.1, 5088.0], [43.2, 5092.0], [43.3, 5094.0], [43.4, 5094.0], [43.5, 5096.0], [43.6, 5099.0], [43.7, 5104.0], [43.8, 5104.0], [43.9, 5113.0], [44.0, 5115.0], [44.1, 5125.0], [44.2, 5125.0], [44.3, 5126.0], [44.4, 5132.0], [44.5, 5135.0], [44.6, 5135.0], [44.7, 5146.0], [44.8, 5147.0], [44.9, 5157.0], [45.0, 5157.0], [45.1, 5159.0], [45.2, 5160.0], [45.3, 5160.0], [45.4, 5160.0], [45.5, 5161.0], [45.6, 5164.0], [45.7, 5164.0], [45.8, 5165.0], [45.9, 5173.0], [46.0, 5177.0], [46.1, 5177.0], [46.2, 5178.0], [46.3, 5192.0], [46.4, 5206.0], [46.5, 5206.0], [46.6, 5215.0], [46.7, 5225.0], [46.8, 5225.0], [46.9, 5226.0], [47.0, 5230.0], [47.1, 5234.0], [47.2, 5234.0], [47.3, 5235.0], [47.4, 5244.0], [47.5, 5246.0], [47.6, 5246.0], [47.7, 5248.0], [47.8, 5254.0], [47.9, 5257.0], [48.0, 5257.0], [48.1, 5262.0], [48.2, 5264.0], [48.3, 5268.0], [48.4, 5268.0], [48.5, 5274.0], [48.6, 5275.0], [48.7, 5275.0], [48.8, 5275.0], [48.9, 5278.0], [49.0, 5279.0], [49.1, 5279.0], [49.2, 5279.0], [49.3, 5280.0], [49.4, 5281.0], [49.5, 5281.0], [49.6, 5284.0], [49.7, 5284.0], [49.8, 5286.0], [49.9, 5286.0], [50.0, 5287.0], [50.1, 5305.0], [50.2, 5305.0], [50.3, 5305.0], [50.4, 5311.0], [50.5, 5312.0], [50.6, 5312.0], [50.7, 5314.0], [50.8, 5323.0], [50.9, 5325.0], [51.0, 5325.0], [51.1, 5325.0], [51.2, 5329.0], [51.3, 5329.0], [51.4, 5329.0], [51.5, 5331.0], [51.6, 5336.0], [51.7, 5336.0], [51.8, 5338.0], [51.9, 5350.0], [52.0, 5352.0], [52.1, 5352.0], [52.2, 5352.0], [52.3, 5354.0], [52.4, 5357.0], [52.5, 5357.0], [52.6, 5361.0], [52.7, 5369.0], [52.8, 5371.0], [52.9, 5371.0], [53.0, 5373.0], [53.1, 5373.0], [53.2, 5376.0], [53.3, 5376.0], [53.4, 5377.0], [53.5, 5378.0], [53.6, 5378.0], [53.7, 5386.0], [53.8, 5387.0], [53.9, 5394.0], [54.0, 5394.0], [54.1, 5397.0], [54.2, 5398.0], [54.3, 5405.0], [54.4, 5405.0], [54.5, 5405.0], [54.6, 5406.0], [54.7, 5410.0], [54.8, 5410.0], [54.9, 5411.0], [55.0, 5419.0], [55.1, 5419.0], [55.2, 5419.0], [55.3, 5422.0], [55.4, 5422.0], [55.5, 5422.0], [55.6, 5428.0], [55.7, 5428.0], [55.8, 5431.0], [55.9, 5431.0], [56.0, 5434.0], [56.1, 5447.0], [56.2, 5456.0], [56.3, 5456.0], [56.4, 5457.0], [56.5, 5460.0], [56.6, 5463.0], [56.7, 5463.0], [56.8, 5463.0], [56.9, 5464.0], [57.0, 5464.0], [57.1, 5465.0], [57.2, 5468.0], [57.3, 5470.0], [57.4, 5470.0], [57.5, 5471.0], [57.6, 5473.0], [57.7, 5481.0], [57.8, 5481.0], [57.9, 5487.0], [58.0, 5488.0], [58.1, 5489.0], [58.2, 5489.0], [58.3, 5490.0], [58.4, 5496.0], [58.5, 5496.0], [58.6, 5502.0], [58.7, 5502.0], [58.8, 5506.0], [58.9, 5506.0], [59.0, 5506.0], [59.1, 5507.0], [59.2, 5512.0], [59.3, 5512.0], [59.4, 5513.0], [59.5, 5517.0], [59.6, 5519.0], [59.7, 5519.0], [59.8, 5519.0], [59.9, 5526.0], [60.0, 5527.0], [60.1, 5527.0], [60.2, 5528.0], [60.3, 5529.0], [60.4, 5529.0], [60.5, 5531.0], [60.6, 5532.0], [60.7, 5533.0], [60.8, 5533.0], [60.9, 5538.0], [61.0, 5539.0], [61.1, 5539.0], [61.2, 5539.0], [61.3, 5539.0], [61.4, 5545.0], [61.5, 5546.0], [61.6, 5546.0], [61.7, 5547.0], [61.8, 5556.0], [61.9, 5556.0], [62.0, 5557.0], [62.1, 5557.0], [62.2, 5557.0], [62.3, 5557.0], [62.4, 5559.0], [62.5, 5561.0], [62.6, 5563.0], [62.7, 5563.0], [62.8, 5564.0], [62.9, 5565.0], [63.0, 5566.0], [63.1, 5566.0], [63.2, 5576.0], [63.3, 5578.0], [63.4, 5578.0], [63.5, 5582.0], [63.6, 5583.0], [63.7, 5584.0], [63.8, 5584.0], [63.9, 5585.0], [64.0, 5585.0], [64.1, 5586.0], [64.2, 5586.0], [64.3, 5588.0], [64.4, 5589.0], [64.5, 5589.0], [64.6, 5589.0], [64.7, 5594.0], [64.8, 5595.0], [64.9, 5597.0], [65.0, 5597.0], [65.1, 5597.0], [65.2, 5599.0], [65.3, 5599.0], [65.4, 5599.0], [65.5, 5609.0], [65.6, 5612.0], [65.7, 5612.0], [65.8, 5614.0], [65.9, 5616.0], [66.0, 5617.0], [66.1, 5617.0], [66.2, 5620.0], [66.3, 5622.0], [66.4, 5625.0], [66.5, 5625.0], [66.6, 5627.0], [66.7, 5628.0], [66.8, 5628.0], [66.9, 5628.0], [67.0, 5632.0], [67.1, 5634.0], [67.2, 5634.0], [67.3, 5637.0], [67.4, 5640.0], [67.5, 5642.0], [67.6, 5642.0], [67.7, 5643.0], [67.8, 5647.0], [67.9, 5648.0], [68.0, 5648.0], [68.1, 5648.0], [68.2, 5653.0], [68.3, 5658.0], [68.4, 5658.0], [68.5, 5662.0], [68.6, 5668.0], [68.7, 5668.0], [68.8, 5675.0], [68.9, 5677.0], [69.0, 5678.0], [69.1, 5678.0], [69.2, 5688.0], [69.3, 5692.0], [69.4, 5695.0], [69.5, 5695.0], [69.6, 5695.0], [69.7, 5698.0], [69.8, 5700.0], [69.9, 5700.0], [70.0, 5701.0], [70.1, 5704.0], [70.2, 5704.0], [70.3, 5710.0], [70.4, 5710.0], [70.5, 5713.0], [70.6, 5713.0], [70.7, 5716.0], [70.8, 5717.0], [70.9, 5718.0], [71.0, 5718.0], [71.1, 5718.0], [71.2, 5721.0], [71.3, 5722.0], [71.4, 5722.0], [71.5, 5724.0], [71.6, 5726.0], [71.7, 5726.0], [71.8, 5727.0], [71.9, 5729.0], [72.0, 5729.0], [72.1, 5729.0], [72.2, 5730.0], [72.3, 5731.0], [72.4, 5732.0], [72.5, 5732.0], [72.6, 5735.0], [72.7, 5736.0], [72.8, 5738.0], [72.9, 5738.0], [73.0, 5738.0], [73.1, 5739.0], [73.2, 5745.0], [73.3, 5745.0], [73.4, 5748.0], [73.5, 5750.0], [73.6, 5750.0], [73.7, 5751.0], [73.8, 5754.0], [73.9, 5754.0], [74.0, 5754.0], [74.1, 5757.0], [74.2, 5759.0], [74.3, 5760.0], [74.4, 5760.0], [74.5, 5761.0], [74.6, 5762.0], [74.7, 5763.0], [74.8, 5763.0], [74.9, 5772.0], [75.0, 5775.0], [75.1, 5775.0], [75.2, 5775.0], [75.3, 5776.0], [75.4, 5784.0], [75.5, 5784.0], [75.6, 5785.0], [75.7, 5786.0], [75.8, 5801.0], [75.9, 5801.0], [76.0, 5808.0], [76.1, 5811.0], [76.2, 5812.0], [76.3, 5812.0], [76.4, 5822.0], [76.5, 5825.0], [76.6, 5826.0], [76.7, 5826.0], [76.8, 5828.0], [76.9, 5830.0], [77.0, 5830.0], [77.1, 5835.0], [77.2, 5839.0], [77.3, 5842.0], [77.4, 5842.0], [77.5, 5855.0], [77.6, 5859.0], [77.7, 5861.0], [77.8, 5861.0], [77.9, 5862.0], [78.0, 5862.0], [78.1, 5868.0], [78.2, 5868.0], [78.3, 5869.0], [78.4, 5872.0], [78.5, 5872.0], [78.6, 5873.0], [78.7, 5877.0], [78.8, 5878.0], [78.9, 5878.0], [79.0, 5878.0], [79.1, 5879.0], [79.2, 5879.0], [79.3, 5879.0], [79.4, 5891.0], [79.5, 5899.0], [79.6, 5899.0], [79.7, 5899.0], [79.8, 5909.0], [79.9, 5909.0], [80.0, 5914.0], [80.1, 5914.0], [80.2, 5917.0], [80.3, 5919.0], [80.4, 5919.0], [80.5, 5921.0], [80.6, 5925.0], [80.7, 5930.0], [80.8, 5930.0], [80.9, 5940.0], [81.0, 5942.0], [81.1, 5942.0], [81.2, 5942.0], [81.3, 5945.0], [81.4, 5947.0], [81.5, 5955.0], [81.6, 5955.0], [81.7, 5956.0], [81.8, 5956.0], [81.9, 5956.0], [82.0, 5959.0], [82.1, 5962.0], [82.2, 5965.0], [82.3, 5965.0], [82.4, 5969.0], [82.5, 5970.0], [82.6, 5973.0], [82.7, 5973.0], [82.8, 5975.0], [82.9, 5976.0], [83.0, 5977.0], [83.1, 5977.0], [83.2, 5981.0], [83.3, 5986.0], [83.4, 5986.0], [83.5, 5996.0], [83.6, 5997.0], [83.7, 5997.0], [83.8, 5997.0], [83.9, 6001.0], [84.0, 6009.0], [84.1, 6009.0], [84.2, 6009.0], [84.3, 6010.0], [84.4, 6013.0], [84.5, 6015.0], [84.6, 6015.0], [84.7, 6025.0], [84.8, 6026.0], [84.9, 6027.0], [85.0, 6027.0], [85.1, 6027.0], [85.2, 6028.0], [85.3, 6028.0], [85.4, 6028.0], [85.5, 6047.0], [85.6, 6051.0], [85.7, 6051.0], [85.8, 6052.0], [85.9, 6055.0], [86.0, 6059.0], [86.1, 6059.0], [86.2, 6061.0], [86.3, 6075.0], [86.4, 6082.0], [86.5, 6082.0], [86.6, 6084.0], [86.7, 6094.0], [86.8, 6094.0], [86.9, 6101.0], [87.0, 6110.0], [87.1, 6118.0], [87.2, 6118.0], [87.3, 6128.0], [87.4, 6152.0], [87.5, 6158.0], [87.6, 6158.0], [87.7, 6181.0], [87.8, 6208.0], [87.9, 6214.0], [88.0, 6214.0], [88.1, 6214.0], [88.2, 6228.0], [88.3, 6243.0], [88.4, 6243.0], [88.5, 6284.0], [88.6, 6305.0], [88.7, 6305.0], [88.8, 6308.0], [88.9, 6332.0], [89.0, 6355.0], [89.1, 6355.0], [89.2, 6376.0], [89.3, 6383.0], [89.4, 6383.0], [89.5, 6383.0], [89.6, 6396.0], [89.7, 6402.0], [89.8, 6409.0], [89.9, 6409.0], [90.0, 6415.0], [90.1, 6418.0], [90.2, 6418.0], [90.3, 6420.0], [90.4, 6428.0], [90.5, 6470.0], [90.6, 6470.0], [90.7, 6488.0], [90.8, 6586.0], [90.9, 6607.0], [91.0, 6607.0], [91.1, 6647.0], [91.2, 6654.0], [91.3, 6709.0], [91.4, 6709.0], [91.5, 6786.0], [91.6, 6803.0], [91.7, 6803.0], [91.8, 6810.0], [91.9, 6833.0], [92.0, 6844.0], [92.1, 6844.0], [92.2, 6888.0], [92.3, 6997.0], [92.4, 7020.0], [92.5, 7020.0], [92.6, 7024.0], [92.7, 7029.0], [92.8, 7031.0], [92.9, 7031.0], [93.0, 7044.0], [93.1, 7051.0], [93.2, 7052.0], [93.3, 7052.0], [93.4, 7071.0], [93.5, 7117.0], [93.6, 7117.0], [93.7, 7135.0], [93.8, 7150.0], [93.9, 7154.0], [94.0, 7154.0], [94.1, 7155.0], [94.2, 7191.0], [94.3, 7194.0], [94.4, 7194.0], [94.5, 7205.0], [94.6, 7208.0], [94.7, 7209.0], [94.8, 7209.0], [94.9, 7255.0], [95.0, 7298.0], [95.1, 7298.0], [95.2, 7308.0], [95.3, 7329.0], [95.4, 7332.0], [95.5, 7332.0], [95.6, 7337.0], [95.7, 7349.0], [95.8, 7371.0], [95.9, 7371.0], [96.0, 7390.0], [96.1, 7412.0], [96.2, 7430.0], [96.3, 7430.0], [96.4, 7450.0], [96.5, 7469.0], [96.6, 7474.0], [96.7, 7474.0], [96.8, 7499.0], [96.9, 7506.0], [97.0, 7506.0], [97.1, 7525.0], [97.2, 7531.0], [97.3, 7531.0], [97.4, 7531.0], [97.5, 7533.0], [97.6, 7570.0], [97.7, 7643.0], [97.8, 7643.0], [97.9, 7647.0], [98.0, 7649.0], [98.1, 7662.0], [98.2, 7662.0], [98.3, 7685.0], [98.4, 7698.0], [98.5, 7698.0], [98.6, 7698.0], [98.7, 7742.0], [98.8, 7825.0], [98.9, 7825.0], [99.0, 7844.0], [99.1, 7872.0], [99.2, 7969.0], [99.3, 7969.0], [99.4, 8018.0], [99.5, 8038.0], [99.6, 8067.0], [99.7, 8067.0], [99.8, 8283.0], [99.9, 8296.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2200.0, "maxY": 51.0, "series": [{"data": [[2300.0, 1.0], [2200.0, 1.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 4.0], [3000.0, 13.0], [3100.0, 13.0], [3300.0, 14.0], [3200.0, 11.0], [3400.0, 21.0], [3500.0, 13.0], [3700.0, 14.0], [3600.0, 13.0], [3800.0, 10.0], [3900.0, 12.0], [4000.0, 20.0], [4100.0, 17.0], [4200.0, 9.0], [4300.0, 14.0], [4400.0, 19.0], [4600.0, 15.0], [4500.0, 13.0], [4700.0, 8.0], [4800.0, 20.0], [5100.0, 20.0], [5000.0, 28.0], [4900.0, 13.0], [5300.0, 31.0], [5200.0, 27.0], [5500.0, 51.0], [5600.0, 32.0], [5400.0, 31.0], [5800.0, 29.0], [5700.0, 44.0], [5900.0, 30.0], [6000.0, 22.0], [6100.0, 7.0], [6300.0, 8.0], [6200.0, 6.0], [6400.0, 8.0], [6600.0, 3.0], [6500.0, 1.0], [6700.0, 2.0], [6900.0, 1.0], [6800.0, 5.0], [7000.0, 8.0], [7100.0, 7.0], [7200.0, 5.0], [7400.0, 6.0], [7300.0, 7.0], [7500.0, 6.0], [7600.0, 7.0], [7900.0, 1.0], [7700.0, 1.0], [7800.0, 3.0], [8000.0, 3.0], [8200.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.459016393442623, "minX": 1.60281018E12, "maxY": 12.0, "series": [{"data": [[1.60281048E12, 11.459016393442623], [1.60281018E12, 12.0], [1.60281036E12, 12.0], [1.60281024E12, 12.0], [1.60281042E12, 12.0], [1.6028103E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3164.0, "minX": 1.0, "maxY": 5142.4765193370085, "series": [{"data": [[8.0, 3637.0], [4.0, 3685.0], [2.0, 3662.0], [1.0, 4085.0], [9.0, 3633.0], [10.0, 3168.0], [5.0, 3701.0], [11.0, 3164.0], [12.0, 5142.4765193370085], [6.0, 3621.0], [3.0, 3673.0], [7.0, 3634.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5119.477551020401]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 490.8666666666667, "minX": 1.60281018E12, "maxY": 368240.2, "series": [{"data": [[1.60281048E12, 254012.73333333334], [1.60281018E12, 263538.65], [1.60281036E12, 368240.2], [1.60281024E12, 328810.18333333335], [1.60281042E12, 300580.2], [1.6028103E12, 320595.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60281048E12, 907.1666666666666], [1.60281018E12, 490.8666666666667], [1.60281036E12, 1056.85], [1.60281024E12, 954.6166666666667], [1.60281042E12, 968.0166666666667], [1.6028103E12, 1145.5166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4483.959016393443, "minX": 1.60281018E12, "maxY": 5904.174603174603, "series": [{"data": [[1.60281048E12, 4483.959016393443], [1.60281018E12, 4804.646153846155], [1.60281036E12, 5128.758865248227], [1.60281024E12, 5904.174603174603], [1.60281042E12, 5619.570312499999], [1.6028103E12, 4686.830065359476]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4483.040983606557, "minX": 1.60281018E12, "maxY": 5902.88888888889, "series": [{"data": [[1.60281048E12, 4483.040983606557], [1.60281018E12, 4803.123076923078], [1.60281036E12, 5127.560283687942], [1.60281024E12, 5902.88888888889], [1.60281042E12, 5618.375], [1.6028103E12, 4685.764705882352]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03278688524590164, "minX": 1.60281018E12, "maxY": 2.1846153846153853, "series": [{"data": [[1.60281048E12, 0.03278688524590164], [1.60281018E12, 2.1846153846153853], [1.60281036E12, 0.099290780141844], [1.60281024E12, 0.1428571428571428], [1.60281042E12, 0.109375], [1.6028103E12, 0.09803921568627452]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2282.0, "minX": 1.60281018E12, "maxY": 8296.0, "series": [{"data": [[1.60281048E12, 7031.0], [1.60281018E12, 7969.0], [1.60281036E12, 7647.0], [1.60281024E12, 8296.0], [1.60281042E12, 6243.0], [1.6028103E12, 6026.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60281048E12, 3046.497999589443], [1.60281018E12, 2777.0], [1.60281036E12, 3029.393999221325], [1.60281024E12, 4199.4609931266305], [1.60281042E12, 4890.6509972012045], [1.6028103E12, 2296.6679986047743]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60281048E12, 3048.0478001642227], [1.60281018E12, 2777.0], [1.60281036E12, 3032.33340031147], [1.60281024E12, 4225.407102749347], [1.60281042E12, 4901.2161011195185], [1.6028103E12, 2301.93480055809]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60281048E12, 3047.3589997947215], [1.60281018E12, 2777.0], [1.60281036E12, 3031.0269996106626], [1.60281024E12, 4213.875496563315], [1.60281042E12, 4896.520498600602], [1.6028103E12, 2299.593999302387]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60281048E12, 3045.0], [1.60281018E12, 2777.0], [1.60281036E12, 3023.0], [1.60281024E12, 4167.0], [1.60281042E12, 4876.0], [1.6028103E12, 2282.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60281048E12, 4376.5], [1.60281018E12, 4233.0], [1.60281036E12, 4806.0], [1.60281024E12, 5723.0], [1.60281042E12, 5616.5], [1.6028103E12, 4912.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3751.0, "minX": 1.0, "maxY": 5628.0, "series": [{"data": [[1.0, 5628.0], [2.0, 5539.0], [4.0, 3881.0], [5.0, 3751.0], [3.0, 5312.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3751.0, "minX": 1.0, "maxY": 5625.0, "series": [{"data": [[1.0, 5625.0], [2.0, 5538.0], [4.0, 3881.0], [5.0, 3751.0], [3.0, 5312.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60281018E12, "maxY": 2.55, "series": [{"data": [[1.60281048E12, 1.8333333333333333], [1.60281018E12, 1.2833333333333334], [1.60281036E12, 2.35], [1.60281024E12, 2.1], [1.60281042E12, 2.1333333333333333], [1.6028103E12, 2.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281048E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60281018E12, "maxY": 2.55, "series": [{"data": [[1.60281048E12, 2.033333333333333], [1.60281018E12, 1.0833333333333333], [1.60281036E12, 2.35], [1.60281024E12, 2.1], [1.60281042E12, 2.1333333333333333], [1.6028103E12, 2.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60281018E12, "maxY": 2.55, "series": [{"data": [[1.60281048E12, 2.033333333333333], [1.60281018E12, 1.0833333333333333], [1.60281036E12, 2.35], [1.60281024E12, 2.1], [1.60281042E12, 2.1333333333333333], [1.6028103E12, 2.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60281018E12, "maxY": 2.55, "series": [{"data": [[1.60281048E12, 2.033333333333333], [1.60281018E12, 1.0833333333333333], [1.60281036E12, 2.35], [1.60281024E12, 2.1], [1.60281042E12, 2.1333333333333333], [1.6028103E12, 2.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281048E12, "title": "Total Transactions Per Second"}},
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

