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
        data: {"result": {"minY": 2452.0, "minX": 0.0, "maxY": 8511.0, "series": [{"data": [[0.0, 2452.0], [0.1, 2452.0], [0.2, 2461.0], [0.3, 2652.0], [0.4, 2652.0], [0.5, 2830.0], [0.6, 2837.0], [0.7, 2866.0], [0.8, 2866.0], [0.9, 2910.0], [1.0, 2915.0], [1.1, 2920.0], [1.2, 2920.0], [1.3, 2931.0], [1.4, 2948.0], [1.5, 2983.0], [1.6, 2983.0], [1.7, 2997.0], [1.8, 3026.0], [1.9, 3026.0], [2.0, 3036.0], [2.1, 3040.0], [2.2, 3059.0], [2.3, 3059.0], [2.4, 3064.0], [2.5, 3067.0], [2.6, 3076.0], [2.7, 3076.0], [2.8, 3078.0], [2.9, 3080.0], [3.0, 3093.0], [3.1, 3093.0], [3.2, 3118.0], [3.3, 3121.0], [3.4, 3121.0], [3.5, 3121.0], [3.6, 3126.0], [3.7, 3127.0], [3.8, 3127.0], [3.9, 3134.0], [4.0, 3158.0], [4.1, 3166.0], [4.2, 3166.0], [4.3, 3174.0], [4.4, 3177.0], [4.5, 3179.0], [4.6, 3179.0], [4.7, 3182.0], [4.8, 3190.0], [4.9, 3198.0], [5.0, 3198.0], [5.1, 3210.0], [5.2, 3210.0], [5.3, 3210.0], [5.4, 3256.0], [5.5, 3270.0], [5.6, 3276.0], [5.7, 3276.0], [5.8, 3278.0], [5.9, 3279.0], [6.0, 3282.0], [6.1, 3282.0], [6.2, 3288.0], [6.3, 3298.0], [6.4, 3309.0], [6.5, 3309.0], [6.6, 3357.0], [6.7, 3361.0], [6.8, 3361.0], [6.9, 3369.0], [7.0, 3373.0], [7.1, 3378.0], [7.2, 3378.0], [7.3, 3388.0], [7.4, 3392.0], [7.5, 3415.0], [7.6, 3415.0], [7.7, 3437.0], [7.8, 3448.0], [7.9, 3462.0], [8.0, 3462.0], [8.1, 3474.0], [8.2, 3484.0], [8.3, 3491.0], [8.4, 3491.0], [8.5, 3501.0], [8.6, 3516.0], [8.7, 3516.0], [8.8, 3529.0], [8.9, 3530.0], [9.0, 3531.0], [9.1, 3531.0], [9.2, 3532.0], [9.3, 3533.0], [9.4, 3533.0], [9.5, 3533.0], [9.6, 3534.0], [9.7, 3538.0], [9.8, 3542.0], [9.9, 3542.0], [10.0, 3548.0], [10.1, 3549.0], [10.2, 3549.0], [10.3, 3552.0], [10.4, 3554.0], [10.5, 3564.0], [10.6, 3564.0], [10.7, 3566.0], [10.8, 3566.0], [10.9, 3578.0], [11.0, 3578.0], [11.1, 3579.0], [11.2, 3588.0], [11.3, 3591.0], [11.4, 3591.0], [11.5, 3599.0], [11.6, 3614.0], [11.7, 3614.0], [11.8, 3614.0], [11.9, 3620.0], [12.0, 3621.0], [12.1, 3621.0], [12.2, 3621.0], [12.3, 3622.0], [12.4, 3633.0], [12.5, 3633.0], [12.6, 3637.0], [12.7, 3640.0], [12.8, 3643.0], [12.9, 3643.0], [13.0, 3643.0], [13.1, 3651.0], [13.2, 3657.0], [13.3, 3657.0], [13.4, 3658.0], [13.5, 3667.0], [13.6, 3667.0], [13.7, 3672.0], [13.8, 3674.0], [13.9, 3694.0], [14.0, 3694.0], [14.1, 3703.0], [14.2, 3705.0], [14.3, 3707.0], [14.4, 3707.0], [14.5, 3709.0], [14.6, 3733.0], [14.7, 3744.0], [14.8, 3744.0], [14.9, 3758.0], [15.0, 3759.0], [15.1, 3759.0], [15.2, 3762.0], [15.3, 3780.0], [15.4, 3799.0], [15.5, 3799.0], [15.6, 3815.0], [15.7, 3816.0], [15.8, 3822.0], [15.9, 3822.0], [16.0, 3822.0], [16.1, 3836.0], [16.2, 3841.0], [16.3, 3841.0], [16.4, 3855.0], [16.5, 3857.0], [16.6, 3859.0], [16.7, 3859.0], [16.8, 3866.0], [16.9, 3882.0], [17.0, 3882.0], [17.1, 3891.0], [17.2, 3902.0], [17.3, 3920.0], [17.4, 3920.0], [17.5, 3932.0], [17.6, 3933.0], [17.7, 3935.0], [17.8, 3935.0], [17.9, 3940.0], [18.0, 3950.0], [18.1, 3957.0], [18.2, 3957.0], [18.3, 3957.0], [18.4, 3957.0], [18.5, 3957.0], [18.6, 3964.0], [18.7, 3996.0], [18.8, 3996.0], [18.9, 3996.0], [19.0, 4020.0], [19.1, 4042.0], [19.2, 4050.0], [19.3, 4050.0], [19.4, 4052.0], [19.5, 4065.0], [19.6, 4068.0], [19.7, 4068.0], [19.8, 4069.0], [19.9, 4071.0], [20.0, 4076.0], [20.1, 4076.0], [20.2, 4083.0], [20.3, 4089.0], [20.4, 4089.0], [20.5, 4094.0], [20.6, 4096.0], [20.7, 4096.0], [20.8, 4096.0], [20.9, 4100.0], [21.0, 4106.0], [21.1, 4111.0], [21.2, 4111.0], [21.3, 4113.0], [21.4, 4115.0], [21.5, 4117.0], [21.6, 4117.0], [21.7, 4121.0], [21.8, 4126.0], [21.9, 4126.0], [22.0, 4127.0], [22.1, 4129.0], [22.2, 4134.0], [22.3, 4134.0], [22.4, 4134.0], [22.5, 4146.0], [22.6, 4147.0], [22.7, 4147.0], [22.8, 4161.0], [22.9, 4164.0], [23.0, 4167.0], [23.1, 4167.0], [23.2, 4175.0], [23.3, 4179.0], [23.4, 4179.0], [23.5, 4191.0], [23.6, 4192.0], [23.7, 4192.0], [23.8, 4192.0], [23.9, 4198.0], [24.0, 4201.0], [24.1, 4226.0], [24.2, 4226.0], [24.3, 4236.0], [24.4, 4244.0], [24.5, 4249.0], [24.6, 4249.0], [24.7, 4249.0], [24.8, 4254.0], [24.9, 4269.0], [25.0, 4269.0], [25.1, 4278.0], [25.2, 4292.0], [25.3, 4292.0], [25.4, 4294.0], [25.5, 4307.0], [25.6, 4309.0], [25.7, 4309.0], [25.8, 4314.0], [25.9, 4320.0], [26.0, 4321.0], [26.1, 4321.0], [26.2, 4328.0], [26.3, 4333.0], [26.4, 4339.0], [26.5, 4339.0], [26.6, 4340.0], [26.7, 4350.0], [26.8, 4350.0], [26.9, 4362.0], [27.0, 4369.0], [27.1, 4374.0], [27.2, 4374.0], [27.3, 4378.0], [27.4, 4379.0], [27.5, 4380.0], [27.6, 4380.0], [27.7, 4386.0], [27.8, 4387.0], [27.9, 4387.0], [28.0, 4387.0], [28.1, 4401.0], [28.2, 4401.0], [28.3, 4430.0], [28.4, 4430.0], [28.5, 4433.0], [28.6, 4443.0], [28.7, 4443.0], [28.8, 4445.0], [28.9, 4451.0], [29.0, 4451.0], [29.1, 4451.0], [29.2, 4451.0], [29.3, 4452.0], [29.4, 4456.0], [29.5, 4456.0], [29.6, 4459.0], [29.7, 4465.0], [29.8, 4486.0], [29.9, 4486.0], [30.0, 4489.0], [30.1, 4501.0], [30.2, 4501.0], [30.3, 4507.0], [30.4, 4519.0], [30.5, 4525.0], [30.6, 4525.0], [30.7, 4536.0], [30.8, 4540.0], [30.9, 4551.0], [31.0, 4551.0], [31.1, 4556.0], [31.2, 4556.0], [31.3, 4561.0], [31.4, 4561.0], [31.5, 4562.0], [31.6, 4569.0], [31.7, 4569.0], [31.8, 4575.0], [31.9, 4579.0], [32.0, 4588.0], [32.1, 4588.0], [32.2, 4590.0], [32.3, 4595.0], [32.4, 4612.0], [32.5, 4612.0], [32.6, 4612.0], [32.7, 4617.0], [32.8, 4619.0], [32.9, 4619.0], [33.0, 4640.0], [33.1, 4640.0], [33.2, 4653.0], [33.3, 4653.0], [33.4, 4661.0], [33.5, 4670.0], [33.6, 4670.0], [33.7, 4676.0], [33.8, 4677.0], [33.9, 4679.0], [34.0, 4679.0], [34.1, 4679.0], [34.2, 4692.0], [34.3, 4699.0], [34.4, 4699.0], [34.5, 4702.0], [34.6, 4709.0], [34.7, 4754.0], [34.8, 4754.0], [34.9, 4757.0], [35.0, 4765.0], [35.1, 4765.0], [35.2, 4767.0], [35.3, 4768.0], [35.4, 4769.0], [35.5, 4769.0], [35.6, 4773.0], [35.7, 4789.0], [35.8, 4791.0], [35.9, 4791.0], [36.0, 4794.0], [36.1, 4802.0], [36.2, 4829.0], [36.3, 4829.0], [36.4, 4831.0], [36.5, 4836.0], [36.6, 4836.0], [36.7, 4836.0], [36.8, 4837.0], [36.9, 4842.0], [37.0, 4842.0], [37.1, 4843.0], [37.2, 4847.0], [37.3, 4864.0], [37.4, 4864.0], [37.5, 4877.0], [37.6, 4877.0], [37.7, 4878.0], [37.8, 4878.0], [37.9, 4878.0], [38.0, 4905.0], [38.1, 4906.0], [38.2, 4906.0], [38.3, 4916.0], [38.4, 4927.0], [38.5, 4927.0], [38.6, 4935.0], [38.7, 4936.0], [38.8, 4950.0], [38.9, 4950.0], [39.0, 4955.0], [39.1, 4957.0], [39.2, 4963.0], [39.3, 4963.0], [39.4, 4964.0], [39.5, 4971.0], [39.6, 4992.0], [39.7, 4992.0], [39.8, 5008.0], [39.9, 5018.0], [40.0, 5032.0], [40.1, 5032.0], [40.2, 5032.0], [40.3, 5038.0], [40.4, 5038.0], [40.5, 5038.0], [40.6, 5038.0], [40.7, 5043.0], [40.8, 5043.0], [40.9, 5043.0], [41.0, 5053.0], [41.1, 5056.0], [41.2, 5056.0], [41.3, 5058.0], [41.4, 5064.0], [41.5, 5069.0], [41.6, 5069.0], [41.7, 5070.0], [41.8, 5073.0], [41.9, 5073.0], [42.0, 5084.0], [42.1, 5091.0], [42.2, 5094.0], [42.3, 5094.0], [42.4, 5094.0], [42.5, 5098.0], [42.6, 5105.0], [42.7, 5105.0], [42.8, 5111.0], [42.9, 5111.0], [43.0, 5133.0], [43.1, 5133.0], [43.2, 5135.0], [43.3, 5145.0], [43.4, 5145.0], [43.5, 5148.0], [43.6, 5152.0], [43.7, 5154.0], [43.8, 5154.0], [43.9, 5156.0], [44.0, 5157.0], [44.1, 5161.0], [44.2, 5161.0], [44.3, 5163.0], [44.4, 5165.0], [44.5, 5199.0], [44.6, 5199.0], [44.7, 5201.0], [44.8, 5205.0], [44.9, 5207.0], [45.0, 5207.0], [45.1, 5209.0], [45.2, 5209.0], [45.3, 5209.0], [45.4, 5212.0], [45.5, 5212.0], [45.6, 5217.0], [45.7, 5217.0], [45.8, 5219.0], [45.9, 5227.0], [46.0, 5227.0], [46.1, 5227.0], [46.2, 5230.0], [46.3, 5234.0], [46.4, 5238.0], [46.5, 5238.0], [46.6, 5239.0], [46.7, 5240.0], [46.8, 5240.0], [46.9, 5253.0], [47.0, 5255.0], [47.1, 5259.0], [47.2, 5259.0], [47.3, 5261.0], [47.4, 5261.0], [47.5, 5262.0], [47.6, 5262.0], [47.7, 5268.0], [47.8, 5275.0], [47.9, 5280.0], [48.0, 5280.0], [48.1, 5282.0], [48.2, 5282.0], [48.3, 5284.0], [48.4, 5284.0], [48.5, 5285.0], [48.6, 5286.0], [48.7, 5286.0], [48.8, 5290.0], [48.9, 5292.0], [49.0, 5296.0], [49.1, 5296.0], [49.2, 5297.0], [49.3, 5299.0], [49.4, 5299.0], [49.5, 5299.0], [49.6, 5300.0], [49.7, 5304.0], [49.8, 5306.0], [49.9, 5306.0], [50.0, 5315.0], [50.1, 5321.0], [50.2, 5321.0], [50.3, 5322.0], [50.4, 5323.0], [50.5, 5323.0], [50.6, 5323.0], [50.7, 5328.0], [50.8, 5335.0], [50.9, 5347.0], [51.0, 5347.0], [51.1, 5350.0], [51.2, 5354.0], [51.3, 5357.0], [51.4, 5357.0], [51.5, 5368.0], [51.6, 5374.0], [51.7, 5374.0], [51.8, 5376.0], [51.9, 5376.0], [52.0, 5377.0], [52.1, 5377.0], [52.2, 5377.0], [52.3, 5377.0], [52.4, 5383.0], [52.5, 5383.0], [52.6, 5385.0], [52.7, 5386.0], [52.8, 5386.0], [52.9, 5386.0], [53.0, 5391.0], [53.1, 5395.0], [53.2, 5397.0], [53.3, 5397.0], [53.4, 5398.0], [53.5, 5398.0], [53.6, 5398.0], [53.7, 5404.0], [53.8, 5405.0], [53.9, 5406.0], [54.0, 5406.0], [54.1, 5407.0], [54.2, 5414.0], [54.3, 5416.0], [54.4, 5416.0], [54.5, 5417.0], [54.6, 5418.0], [54.7, 5418.0], [54.8, 5418.0], [54.9, 5422.0], [55.0, 5423.0], [55.1, 5423.0], [55.2, 5424.0], [55.3, 5430.0], [55.4, 5431.0], [55.5, 5431.0], [55.6, 5433.0], [55.7, 5436.0], [55.8, 5436.0], [55.9, 5436.0], [56.0, 5443.0], [56.1, 5443.0], [56.2, 5445.0], [56.3, 5445.0], [56.4, 5446.0], [56.5, 5447.0], [56.6, 5448.0], [56.7, 5448.0], [56.8, 5453.0], [56.9, 5454.0], [57.0, 5454.0], [57.1, 5458.0], [57.2, 5459.0], [57.3, 5459.0], [57.4, 5459.0], [57.5, 5460.0], [57.6, 5461.0], [57.7, 5462.0], [57.8, 5462.0], [57.9, 5465.0], [58.0, 5465.0], [58.1, 5467.0], [58.2, 5467.0], [58.3, 5468.0], [58.4, 5470.0], [58.5, 5470.0], [58.6, 5471.0], [58.7, 5472.0], [58.8, 5474.0], [58.9, 5474.0], [59.0, 5480.0], [59.1, 5488.0], [59.2, 5489.0], [59.3, 5489.0], [59.4, 5491.0], [59.5, 5493.0], [59.6, 5493.0], [59.7, 5493.0], [59.8, 5498.0], [59.9, 5500.0], [60.0, 5500.0], [60.1, 5500.0], [60.2, 5500.0], [60.3, 5511.0], [60.4, 5511.0], [60.5, 5512.0], [60.6, 5516.0], [60.7, 5525.0], [60.8, 5525.0], [60.9, 5530.0], [61.0, 5535.0], [61.1, 5541.0], [61.2, 5541.0], [61.3, 5543.0], [61.4, 5547.0], [61.5, 5549.0], [61.6, 5549.0], [61.7, 5550.0], [61.8, 5551.0], [61.9, 5551.0], [62.0, 5557.0], [62.1, 5561.0], [62.2, 5564.0], [62.3, 5564.0], [62.4, 5566.0], [62.5, 5568.0], [62.6, 5571.0], [62.7, 5571.0], [62.8, 5572.0], [62.9, 5572.0], [63.0, 5574.0], [63.1, 5574.0], [63.2, 5575.0], [63.3, 5586.0], [63.4, 5586.0], [63.5, 5589.0], [63.6, 5594.0], [63.7, 5594.0], [63.8, 5594.0], [63.9, 5597.0], [64.0, 5597.0], [64.1, 5611.0], [64.2, 5611.0], [64.3, 5611.0], [64.4, 5613.0], [64.5, 5616.0], [64.6, 5616.0], [64.7, 5620.0], [64.8, 5622.0], [64.9, 5622.0], [65.0, 5622.0], [65.1, 5624.0], [65.2, 5626.0], [65.3, 5626.0], [65.4, 5631.0], [65.5, 5641.0], [65.6, 5643.0], [65.7, 5643.0], [65.8, 5644.0], [65.9, 5646.0], [66.0, 5648.0], [66.1, 5648.0], [66.2, 5655.0], [66.3, 5661.0], [66.4, 5664.0], [66.5, 5664.0], [66.6, 5665.0], [66.7, 5672.0], [66.8, 5672.0], [66.9, 5678.0], [67.0, 5681.0], [67.1, 5685.0], [67.2, 5685.0], [67.3, 5685.0], [67.4, 5685.0], [67.5, 5686.0], [67.6, 5686.0], [67.7, 5686.0], [67.8, 5687.0], [67.9, 5690.0], [68.0, 5690.0], [68.1, 5697.0], [68.2, 5698.0], [68.3, 5703.0], [68.4, 5703.0], [68.5, 5703.0], [68.6, 5704.0], [68.7, 5704.0], [68.8, 5709.0], [68.9, 5710.0], [69.0, 5714.0], [69.1, 5714.0], [69.2, 5716.0], [69.3, 5717.0], [69.4, 5723.0], [69.5, 5723.0], [69.6, 5724.0], [69.7, 5734.0], [69.8, 5739.0], [69.9, 5739.0], [70.0, 5740.0], [70.1, 5741.0], [70.2, 5741.0], [70.3, 5742.0], [70.4, 5742.0], [70.5, 5744.0], [70.6, 5744.0], [70.7, 5747.0], [70.8, 5748.0], [70.9, 5751.0], [71.0, 5751.0], [71.1, 5752.0], [71.2, 5753.0], [71.3, 5753.0], [71.4, 5753.0], [71.5, 5754.0], [71.6, 5754.0], [71.7, 5754.0], [71.8, 5759.0], [71.9, 5760.0], [72.0, 5761.0], [72.1, 5761.0], [72.2, 5761.0], [72.3, 5766.0], [72.4, 5768.0], [72.5, 5768.0], [72.6, 5772.0], [72.7, 5775.0], [72.8, 5775.0], [72.9, 5775.0], [73.0, 5778.0], [73.1, 5779.0], [73.2, 5779.0], [73.3, 5779.0], [73.4, 5780.0], [73.5, 5782.0], [73.6, 5782.0], [73.7, 5791.0], [73.8, 5791.0], [73.9, 5793.0], [74.0, 5793.0], [74.1, 5795.0], [74.2, 5797.0], [74.3, 5799.0], [74.4, 5799.0], [74.5, 5804.0], [74.6, 5806.0], [74.7, 5810.0], [74.8, 5810.0], [74.9, 5810.0], [75.0, 5812.0], [75.1, 5812.0], [75.2, 5814.0], [75.3, 5815.0], [75.4, 5815.0], [75.5, 5815.0], [75.6, 5816.0], [75.7, 5820.0], [75.8, 5830.0], [75.9, 5830.0], [76.0, 5831.0], [76.1, 5833.0], [76.2, 5835.0], [76.3, 5835.0], [76.4, 5836.0], [76.5, 5836.0], [76.6, 5837.0], [76.7, 5837.0], [76.8, 5838.0], [76.9, 5841.0], [77.0, 5841.0], [77.1, 5842.0], [77.2, 5842.0], [77.3, 5844.0], [77.4, 5844.0], [77.5, 5848.0], [77.6, 5851.0], [77.7, 5851.0], [77.8, 5851.0], [77.9, 5861.0], [78.0, 5862.0], [78.1, 5863.0], [78.2, 5863.0], [78.3, 5863.0], [78.4, 5872.0], [78.5, 5872.0], [78.6, 5874.0], [78.7, 5875.0], [78.8, 5881.0], [78.9, 5881.0], [79.0, 5881.0], [79.1, 5881.0], [79.2, 5885.0], [79.3, 5885.0], [79.4, 5889.0], [79.5, 5889.0], [79.6, 5893.0], [79.7, 5893.0], [79.8, 5893.0], [79.9, 5895.0], [80.0, 5900.0], [80.1, 5900.0], [80.2, 5902.0], [80.3, 5903.0], [80.4, 5903.0], [80.5, 5906.0], [80.6, 5911.0], [80.7, 5916.0], [80.8, 5916.0], [80.9, 5916.0], [81.0, 5928.0], [81.1, 5928.0], [81.2, 5928.0], [81.3, 5929.0], [81.4, 5929.0], [81.5, 5930.0], [81.6, 5930.0], [81.7, 5934.0], [81.8, 5938.0], [81.9, 5938.0], [82.0, 5939.0], [82.1, 5941.0], [82.2, 5945.0], [82.3, 5945.0], [82.4, 5949.0], [82.5, 5953.0], [82.6, 5954.0], [82.7, 5954.0], [82.8, 5959.0], [82.9, 5961.0], [83.0, 5976.0], [83.1, 5976.0], [83.2, 5980.0], [83.3, 5981.0], [83.4, 5981.0], [83.5, 5983.0], [83.6, 5990.0], [83.7, 5991.0], [83.8, 5991.0], [83.9, 5991.0], [84.0, 5998.0], [84.1, 5999.0], [84.2, 5999.0], [84.3, 6003.0], [84.4, 6004.0], [84.5, 6006.0], [84.6, 6006.0], [84.7, 6018.0], [84.8, 6021.0], [84.9, 6022.0], [85.0, 6022.0], [85.1, 6022.0], [85.2, 6024.0], [85.3, 6024.0], [85.4, 6032.0], [85.5, 6039.0], [85.6, 6053.0], [85.7, 6053.0], [85.8, 6054.0], [85.9, 6060.0], [86.0, 6062.0], [86.1, 6062.0], [86.2, 6068.0], [86.3, 6073.0], [86.4, 6078.0], [86.5, 6078.0], [86.6, 6090.0], [86.7, 6105.0], [86.8, 6105.0], [86.9, 6112.0], [87.0, 6117.0], [87.1, 6122.0], [87.2, 6122.0], [87.3, 6128.0], [87.4, 6129.0], [87.5, 6131.0], [87.6, 6131.0], [87.7, 6146.0], [87.8, 6147.0], [87.9, 6151.0], [88.0, 6151.0], [88.1, 6177.0], [88.2, 6183.0], [88.3, 6192.0], [88.4, 6192.0], [88.5, 6240.0], [88.6, 6244.0], [88.7, 6244.0], [88.8, 6261.0], [88.9, 6263.0], [89.0, 6273.0], [89.1, 6273.0], [89.2, 6301.0], [89.3, 6316.0], [89.4, 6319.0], [89.5, 6319.0], [89.6, 6324.0], [89.7, 6341.0], [89.8, 6357.0], [89.9, 6357.0], [90.0, 6414.0], [90.1, 6490.0], [90.2, 6490.0], [90.3, 6535.0], [90.4, 6538.0], [90.5, 6548.0], [90.6, 6548.0], [90.7, 6550.0], [90.8, 6559.0], [90.9, 6612.0], [91.0, 6612.0], [91.1, 6664.0], [91.2, 6690.0], [91.3, 6702.0], [91.4, 6702.0], [91.5, 6764.0], [91.6, 6779.0], [91.7, 6779.0], [91.8, 6864.0], [91.9, 6871.0], [92.0, 6888.0], [92.1, 6888.0], [92.2, 6899.0], [92.3, 6899.0], [92.4, 7032.0], [92.5, 7032.0], [92.6, 7087.0], [92.7, 7098.0], [92.8, 7177.0], [92.9, 7177.0], [93.0, 7181.0], [93.1, 7191.0], [93.2, 7209.0], [93.3, 7209.0], [93.4, 7213.0], [93.5, 7236.0], [93.6, 7236.0], [93.7, 7237.0], [93.8, 7238.0], [93.9, 7246.0], [94.0, 7246.0], [94.1, 7277.0], [94.2, 7278.0], [94.3, 7303.0], [94.4, 7303.0], [94.5, 7340.0], [94.6, 7352.0], [94.7, 7371.0], [94.8, 7371.0], [94.9, 7376.0], [95.0, 7396.0], [95.1, 7396.0], [95.2, 7398.0], [95.3, 7405.0], [95.4, 7439.0], [95.5, 7439.0], [95.6, 7440.0], [95.7, 7453.0], [95.8, 7516.0], [95.9, 7516.0], [96.0, 7540.0], [96.1, 7546.0], [96.2, 7549.0], [96.3, 7549.0], [96.4, 7552.0], [96.5, 7578.0], [96.6, 7580.0], [96.7, 7580.0], [96.8, 7587.0], [96.9, 7606.0], [97.0, 7606.0], [97.1, 7607.0], [97.2, 7612.0], [97.3, 7616.0], [97.4, 7616.0], [97.5, 7624.0], [97.6, 7651.0], [97.7, 7656.0], [97.8, 7656.0], [97.9, 7696.0], [98.0, 7696.0], [98.1, 7723.0], [98.2, 7723.0], [98.3, 7750.0], [98.4, 7785.0], [98.5, 7785.0], [98.6, 7849.0], [98.7, 7879.0], [98.8, 7890.0], [98.9, 7890.0], [99.0, 7958.0], [99.1, 7994.0], [99.2, 8019.0], [99.3, 8019.0], [99.4, 8037.0], [99.5, 8127.0], [99.6, 8251.0], [99.7, 8251.0], [99.8, 8505.0], [99.9, 8511.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2400.0, "maxY": 46.0, "series": [{"data": [[2400.0, 2.0], [2600.0, 1.0], [2800.0, 3.0], [2900.0, 7.0], [3000.0, 10.0], [3100.0, 14.0], [3200.0, 10.0], [3300.0, 8.0], [3400.0, 7.0], [3500.0, 23.0], [3700.0, 11.0], [3600.0, 18.0], [3800.0, 12.0], [3900.0, 13.0], [4000.0, 14.0], [4100.0, 23.0], [4300.0, 19.0], [4200.0, 11.0], [4500.0, 17.0], [4600.0, 15.0], [4400.0, 15.0], [4700.0, 12.0], [4800.0, 14.0], [5100.0, 15.0], [5000.0, 21.0], [4900.0, 13.0], [5200.0, 36.0], [5300.0, 30.0], [5400.0, 46.0], [5600.0, 31.0], [5500.0, 31.0], [5800.0, 41.0], [5700.0, 45.0], [5900.0, 31.0], [6000.0, 18.0], [6100.0, 13.0], [6200.0, 5.0], [6300.0, 6.0], [6500.0, 5.0], [6400.0, 2.0], [6600.0, 3.0], [6700.0, 3.0], [6800.0, 5.0], [7100.0, 3.0], [7000.0, 3.0], [7300.0, 7.0], [7200.0, 8.0], [7400.0, 4.0], [7500.0, 8.0], [7600.0, 9.0], [7700.0, 3.0], [7800.0, 3.0], [7900.0, 2.0], [8100.0, 1.0], [8000.0, 2.0], [8500.0, 2.0], [8200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.730769230769232, "minX": 1.60263744E12, "maxY": 12.0, "series": [{"data": [[1.60263756E12, 12.0], [1.60263774E12, 10.730769230769232], [1.60263768E12, 12.0], [1.6026375E12, 12.0], [1.60263744E12, 12.0], [1.60263762E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263774E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3121.0, "minX": 1.0, "maxY": 5169.4751381215465, "series": [{"data": [[8.0, 3549.0], [4.0, 3667.0], [2.0, 3733.0], [1.0, 4126.0], [9.0, 3538.0], [10.0, 3121.0], [5.0, 3633.0], [11.0, 3127.0], [12.0, 5169.4751381215465], [6.0, 3566.0], [3.0, 3705.0], [7.0, 3579.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5145.638095238094]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 380.81666666666666, "minX": 1.60263744E12, "maxY": 420023.85, "series": [{"data": [[1.60263756E12, 354941.56666666665], [1.60263774E12, 147212.93333333332], [1.60263768E12, 282259.45], [1.6026375E12, 302605.2], [1.60263744E12, 420023.85], [1.60263762E12, 328735.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263756E12, 1214.7166666666667], [1.60263774E12, 380.81666666666666], [1.60263768E12, 1093.8666666666666], [1.6026375E12, 967.2833333333333], [1.60263744E12, 893.9], [1.60263762E12, 972.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263774E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4385.006097560974, "minX": 1.60263744E12, "maxY": 5635.273437500001, "series": [{"data": [[1.60263756E12, 4385.006097560974], [1.60263774E12, 5029.326923076923], [1.60263768E12, 4915.703448275861], [1.6026375E12, 5559.999999999999], [1.60263744E12, 5555.983050847458], [1.60263762E12, 5635.273437500001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263774E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4383.969512195125, "minX": 1.60263744E12, "maxY": 5634.078124999999, "series": [{"data": [[1.60263756E12, 4383.969512195125], [1.60263774E12, 5027.903846153847], [1.60263768E12, 4914.855172413791], [1.6026375E12, 5558.757812499999], [1.60263744E12, 5554.372881355932], [1.60263762E12, 5634.078124999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263774E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.038461538461538464, "minX": 1.60263744E12, "maxY": 1.0593220338983065, "series": [{"data": [[1.60263756E12, 0.07926829268292686], [1.60263774E12, 0.038461538461538464], [1.60263768E12, 0.10344827586206905], [1.6026375E12, 0.12499999999999997], [1.60263744E12, 1.0593220338983065], [1.60263762E12, 0.12500000000000006]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263774E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2452.0, "minX": 1.60263744E12, "maxY": 8511.0, "series": [{"data": [[1.60263756E12, 7587.0], [1.60263774E12, 7191.0], [1.60263768E12, 6151.0], [1.6026375E12, 6192.0], [1.60263744E12, 8511.0], [1.60263762E12, 7656.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263756E12, 2456.3649996459485], [1.60263774E12, 3121.0], [1.60263768E12, 3120.511999721527], [1.6026375E12, 4169.095989665985], [1.60263744E12, 2664.6379949498178], [1.60263762E12, 3975.0319965553285]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263756E12, 2457.7015001416207], [1.60263774E12, 3121.0], [1.60263768E12, 3121.563200111389], [1.6026375E12, 4208.105604133606], [1.60263744E12, 2683.701802020073], [1.60263762E12, 3988.035201377869]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263756E12, 2457.107499822974], [1.60263774E12, 3121.0], [1.60263768E12, 3121.0959998607636], [1.6026375E12, 4190.767994832992], [1.60263744E12, 2675.2289974749087], [1.60263762E12, 3982.2559982776643]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263756E12, 2452.0], [1.60263774E12, 3121.0], [1.60263768E12, 3118.0], [1.6026375E12, 4115.0], [1.60263744E12, 2652.0], [1.60263762E12, 3957.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263756E12, 4208.5], [1.60263774E12, 5146.5], [1.60263768E12, 5268.0], [1.6026375E12, 5595.5], [1.60263744E12, 5464.5], [1.60263762E12, 5675.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263774E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3999.5, "minX": 1.0, "maxY": 5980.0, "series": [{"data": [[2.0, 5527.5], [4.0, 3999.5], [1.0, 5980.0], [5.0, 4269.0], [3.0, 5209.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3999.5, "minX": 1.0, "maxY": 5976.0, "series": [{"data": [[2.0, 5526.5], [4.0, 3999.5], [1.0, 5976.0], [5.0, 4269.0], [3.0, 5208.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60263744E12, "maxY": 2.7333333333333334, "series": [{"data": [[1.60263756E12, 2.7333333333333334], [1.60263774E12, 0.6666666666666666], [1.60263768E12, 2.4166666666666665], [1.6026375E12, 2.1333333333333333], [1.60263744E12, 2.1666666666666665], [1.60263762E12, 2.1333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263774E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.60263744E12, "maxY": 2.7333333333333334, "series": [{"data": [[1.60263756E12, 2.7333333333333334], [1.60263774E12, 0.8666666666666667], [1.60263768E12, 2.4166666666666665], [1.6026375E12, 2.1333333333333333], [1.60263744E12, 1.9666666666666666], [1.60263762E12, 2.1333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263774E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.60263744E12, "maxY": 2.7333333333333334, "series": [{"data": [[1.60263756E12, 2.7333333333333334], [1.60263774E12, 0.8666666666666667], [1.60263768E12, 2.4166666666666665], [1.6026375E12, 2.1333333333333333], [1.60263744E12, 1.9666666666666666], [1.60263762E12, 2.1333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263774E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.60263744E12, "maxY": 2.7333333333333334, "series": [{"data": [[1.60263756E12, 2.7333333333333334], [1.60263774E12, 0.8666666666666667], [1.60263768E12, 2.4166666666666665], [1.6026375E12, 2.1333333333333333], [1.60263744E12, 1.9666666666666666], [1.60263762E12, 2.1333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263774E12, "title": "Total Transactions Per Second"}},
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

