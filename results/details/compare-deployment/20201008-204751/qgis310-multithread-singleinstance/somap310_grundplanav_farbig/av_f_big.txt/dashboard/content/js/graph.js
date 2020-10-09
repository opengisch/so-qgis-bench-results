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
        data: {"result": {"minY": 2381.0, "minX": 0.0, "maxY": 8717.0, "series": [{"data": [[0.0, 2381.0], [0.1, 2381.0], [0.2, 2382.0], [0.3, 2741.0], [0.4, 2741.0], [0.5, 2757.0], [0.6, 2782.0], [0.7, 2816.0], [0.8, 2816.0], [0.9, 2882.0], [1.0, 2883.0], [1.1, 2893.0], [1.2, 2893.0], [1.3, 2936.0], [1.4, 2961.0], [1.5, 3031.0], [1.6, 3031.0], [1.7, 3036.0], [1.8, 3050.0], [1.9, 3050.0], [2.0, 3109.0], [2.1, 3110.0], [2.2, 3111.0], [2.3, 3111.0], [2.4, 3112.0], [2.5, 3123.0], [2.6, 3126.0], [2.7, 3126.0], [2.8, 3128.0], [2.9, 3136.0], [3.0, 3139.0], [3.1, 3139.0], [3.2, 3167.0], [3.3, 3179.0], [3.4, 3179.0], [3.5, 3190.0], [3.6, 3192.0], [3.7, 3199.0], [3.8, 3199.0], [3.9, 3207.0], [4.0, 3215.0], [4.1, 3218.0], [4.2, 3218.0], [4.3, 3219.0], [4.4, 3228.0], [4.5, 3230.0], [4.6, 3230.0], [4.7, 3257.0], [4.8, 3272.0], [4.9, 3273.0], [5.0, 3273.0], [5.1, 3273.0], [5.2, 3286.0], [5.3, 3286.0], [5.4, 3290.0], [5.5, 3294.0], [5.6, 3312.0], [5.7, 3312.0], [5.8, 3337.0], [5.9, 3366.0], [6.0, 3369.0], [6.1, 3369.0], [6.2, 3370.0], [6.3, 3389.0], [6.4, 3396.0], [6.5, 3396.0], [6.6, 3409.0], [6.7, 3431.0], [6.8, 3431.0], [6.9, 3437.0], [7.0, 3442.0], [7.1, 3454.0], [7.2, 3454.0], [7.3, 3464.0], [7.4, 3470.0], [7.5, 3479.0], [7.6, 3479.0], [7.7, 3479.0], [7.8, 3489.0], [7.9, 3492.0], [8.0, 3492.0], [8.1, 3498.0], [8.2, 3504.0], [8.3, 3515.0], [8.4, 3515.0], [8.5, 3541.0], [8.6, 3542.0], [8.7, 3542.0], [8.8, 3542.0], [8.9, 3543.0], [9.0, 3547.0], [9.1, 3547.0], [9.2, 3548.0], [9.3, 3554.0], [9.4, 3555.0], [9.5, 3555.0], [9.6, 3556.0], [9.7, 3556.0], [9.8, 3557.0], [9.9, 3557.0], [10.0, 3562.0], [10.1, 3565.0], [10.2, 3565.0], [10.3, 3569.0], [10.4, 3572.0], [10.5, 3573.0], [10.6, 3573.0], [10.7, 3575.0], [10.8, 3575.0], [10.9, 3575.0], [11.0, 3575.0], [11.1, 3583.0], [11.2, 3585.0], [11.3, 3586.0], [11.4, 3586.0], [11.5, 3588.0], [11.6, 3591.0], [11.7, 3591.0], [11.8, 3592.0], [11.9, 3594.0], [12.0, 3595.0], [12.1, 3595.0], [12.2, 3600.0], [12.3, 3602.0], [12.4, 3608.0], [12.5, 3608.0], [12.6, 3611.0], [12.7, 3617.0], [12.8, 3617.0], [12.9, 3617.0], [13.0, 3620.0], [13.1, 3621.0], [13.2, 3623.0], [13.3, 3623.0], [13.4, 3632.0], [13.5, 3642.0], [13.6, 3642.0], [13.7, 3656.0], [13.8, 3661.0], [13.9, 3685.0], [14.0, 3685.0], [14.1, 3692.0], [14.2, 3693.0], [14.3, 3694.0], [14.4, 3694.0], [14.5, 3697.0], [14.6, 3732.0], [14.7, 3763.0], [14.8, 3763.0], [14.9, 3782.0], [15.0, 3785.0], [15.1, 3785.0], [15.2, 3786.0], [15.3, 3818.0], [15.4, 3834.0], [15.5, 3834.0], [15.6, 3836.0], [15.7, 3837.0], [15.8, 3842.0], [15.9, 3842.0], [16.0, 3857.0], [16.1, 3858.0], [16.2, 3871.0], [16.3, 3871.0], [16.4, 3872.0], [16.5, 3877.0], [16.6, 3882.0], [16.7, 3882.0], [16.8, 3890.0], [16.9, 3898.0], [17.0, 3898.0], [17.1, 3899.0], [17.2, 3908.0], [17.3, 3910.0], [17.4, 3910.0], [17.5, 3924.0], [17.6, 3946.0], [17.7, 3947.0], [17.8, 3947.0], [17.9, 3963.0], [18.0, 3973.0], [18.1, 3978.0], [18.2, 3978.0], [18.3, 3986.0], [18.4, 3988.0], [18.5, 3988.0], [18.6, 3989.0], [18.7, 3997.0], [18.8, 3999.0], [18.9, 3999.0], [19.0, 4009.0], [19.1, 4010.0], [19.2, 4014.0], [19.3, 4014.0], [19.4, 4020.0], [19.5, 4032.0], [19.6, 4035.0], [19.7, 4035.0], [19.8, 4035.0], [19.9, 4036.0], [20.0, 4041.0], [20.1, 4041.0], [20.2, 4043.0], [20.3, 4046.0], [20.4, 4046.0], [20.5, 4060.0], [20.6, 4064.0], [20.7, 4075.0], [20.8, 4075.0], [20.9, 4077.0], [21.0, 4077.0], [21.1, 4078.0], [21.2, 4078.0], [21.3, 4080.0], [21.4, 4086.0], [21.5, 4086.0], [21.6, 4086.0], [21.7, 4088.0], [21.8, 4088.0], [21.9, 4088.0], [22.0, 4088.0], [22.1, 4104.0], [22.2, 4137.0], [22.3, 4137.0], [22.4, 4139.0], [22.5, 4145.0], [22.6, 4155.0], [22.7, 4155.0], [22.8, 4164.0], [22.9, 4191.0], [23.0, 4191.0], [23.1, 4191.0], [23.2, 4194.0], [23.3, 4196.0], [23.4, 4196.0], [23.5, 4203.0], [23.6, 4204.0], [23.7, 4224.0], [23.8, 4224.0], [23.9, 4241.0], [24.0, 4247.0], [24.1, 4264.0], [24.2, 4264.0], [24.3, 4269.0], [24.4, 4273.0], [24.5, 4277.0], [24.6, 4277.0], [24.7, 4280.0], [24.8, 4289.0], [24.9, 4302.0], [25.0, 4302.0], [25.1, 4315.0], [25.2, 4318.0], [25.3, 4318.0], [25.4, 4327.0], [25.5, 4328.0], [25.6, 4332.0], [25.7, 4332.0], [25.8, 4332.0], [25.9, 4337.0], [26.0, 4339.0], [26.1, 4339.0], [26.2, 4340.0], [26.3, 4344.0], [26.4, 4348.0], [26.5, 4348.0], [26.6, 4350.0], [26.7, 4360.0], [26.8, 4360.0], [26.9, 4370.0], [27.0, 4373.0], [27.1, 4384.0], [27.2, 4384.0], [27.3, 4393.0], [27.4, 4393.0], [27.5, 4397.0], [27.6, 4397.0], [27.7, 4403.0], [27.8, 4428.0], [27.9, 4428.0], [28.0, 4428.0], [28.1, 4431.0], [28.2, 4444.0], [28.3, 4449.0], [28.4, 4449.0], [28.5, 4455.0], [28.6, 4460.0], [28.7, 4460.0], [28.8, 4463.0], [28.9, 4464.0], [29.0, 4468.0], [29.1, 4468.0], [29.2, 4468.0], [29.3, 4475.0], [29.4, 4476.0], [29.5, 4476.0], [29.6, 4477.0], [29.7, 4479.0], [29.8, 4489.0], [29.9, 4489.0], [30.0, 4492.0], [30.1, 4501.0], [30.2, 4501.0], [30.3, 4508.0], [30.4, 4510.0], [30.5, 4510.0], [30.6, 4510.0], [30.7, 4520.0], [30.8, 4528.0], [30.9, 4547.0], [31.0, 4547.0], [31.1, 4552.0], [31.2, 4556.0], [31.3, 4568.0], [31.4, 4568.0], [31.5, 4571.0], [31.6, 4580.0], [31.7, 4580.0], [31.8, 4584.0], [31.9, 4589.0], [32.0, 4592.0], [32.1, 4592.0], [32.2, 4641.0], [32.3, 4642.0], [32.4, 4658.0], [32.5, 4658.0], [32.6, 4662.0], [32.7, 4675.0], [32.8, 4680.0], [32.9, 4680.0], [33.0, 4680.0], [33.1, 4682.0], [33.2, 4683.0], [33.3, 4683.0], [33.4, 4694.0], [33.5, 4709.0], [33.6, 4709.0], [33.7, 4713.0], [33.8, 4713.0], [33.9, 4719.0], [34.0, 4719.0], [34.1, 4726.0], [34.2, 4733.0], [34.3, 4743.0], [34.4, 4743.0], [34.5, 4771.0], [34.6, 4776.0], [34.7, 4789.0], [34.8, 4789.0], [34.9, 4791.0], [35.0, 4800.0], [35.1, 4800.0], [35.2, 4800.0], [35.3, 4801.0], [35.4, 4804.0], [35.5, 4804.0], [35.6, 4808.0], [35.7, 4810.0], [35.8, 4826.0], [35.9, 4826.0], [36.0, 4828.0], [36.1, 4829.0], [36.2, 4829.0], [36.3, 4829.0], [36.4, 4835.0], [36.5, 4836.0], [36.6, 4837.0], [36.7, 4837.0], [36.8, 4857.0], [36.9, 4862.0], [37.0, 4862.0], [37.1, 4865.0], [37.2, 4865.0], [37.3, 4881.0], [37.4, 4881.0], [37.5, 4883.0], [37.6, 4893.0], [37.7, 4924.0], [37.8, 4924.0], [37.9, 4929.0], [38.0, 4930.0], [38.1, 4944.0], [38.2, 4944.0], [38.3, 4949.0], [38.4, 4971.0], [38.5, 4971.0], [38.6, 4982.0], [38.7, 5000.0], [38.8, 5005.0], [38.9, 5005.0], [39.0, 5009.0], [39.1, 5017.0], [39.2, 5022.0], [39.3, 5022.0], [39.4, 5024.0], [39.5, 5032.0], [39.6, 5034.0], [39.7, 5034.0], [39.8, 5034.0], [39.9, 5034.0], [40.0, 5040.0], [40.1, 5040.0], [40.2, 5044.0], [40.3, 5067.0], [40.4, 5067.0], [40.5, 5093.0], [40.6, 5097.0], [40.7, 5101.0], [40.8, 5101.0], [40.9, 5105.0], [41.0, 5108.0], [41.1, 5109.0], [41.2, 5109.0], [41.3, 5112.0], [41.4, 5114.0], [41.5, 5115.0], [41.6, 5115.0], [41.7, 5115.0], [41.8, 5119.0], [41.9, 5119.0], [42.0, 5125.0], [42.1, 5132.0], [42.2, 5135.0], [42.3, 5135.0], [42.4, 5137.0], [42.5, 5138.0], [42.6, 5144.0], [42.7, 5144.0], [42.8, 5150.0], [42.9, 5151.0], [43.0, 5153.0], [43.1, 5153.0], [43.2, 5154.0], [43.3, 5159.0], [43.4, 5159.0], [43.5, 5162.0], [43.6, 5164.0], [43.7, 5192.0], [43.8, 5192.0], [43.9, 5195.0], [44.0, 5210.0], [44.1, 5213.0], [44.2, 5213.0], [44.3, 5215.0], [44.4, 5217.0], [44.5, 5218.0], [44.6, 5218.0], [44.7, 5219.0], [44.8, 5220.0], [44.9, 5222.0], [45.0, 5222.0], [45.1, 5222.0], [45.2, 5222.0], [45.3, 5222.0], [45.4, 5227.0], [45.5, 5232.0], [45.6, 5233.0], [45.7, 5233.0], [45.8, 5240.0], [45.9, 5242.0], [46.0, 5243.0], [46.1, 5243.0], [46.2, 5247.0], [46.3, 5247.0], [46.4, 5256.0], [46.5, 5256.0], [46.6, 5261.0], [46.7, 5269.0], [46.8, 5269.0], [46.9, 5270.0], [47.0, 5292.0], [47.1, 5296.0], [47.2, 5296.0], [47.3, 5298.0], [47.4, 5299.0], [47.5, 5300.0], [47.6, 5300.0], [47.7, 5301.0], [47.8, 5304.0], [47.9, 5314.0], [48.0, 5314.0], [48.1, 5317.0], [48.2, 5320.0], [48.3, 5323.0], [48.4, 5323.0], [48.5, 5326.0], [48.6, 5328.0], [48.7, 5328.0], [48.8, 5336.0], [48.9, 5342.0], [49.0, 5343.0], [49.1, 5343.0], [49.2, 5343.0], [49.3, 5348.0], [49.4, 5349.0], [49.5, 5349.0], [49.6, 5350.0], [49.7, 5353.0], [49.8, 5355.0], [49.9, 5355.0], [50.0, 5357.0], [50.1, 5358.0], [50.2, 5358.0], [50.3, 5358.0], [50.4, 5360.0], [50.5, 5364.0], [50.6, 5364.0], [50.7, 5366.0], [50.8, 5368.0], [50.9, 5374.0], [51.0, 5374.0], [51.1, 5374.0], [51.2, 5378.0], [51.3, 5379.0], [51.4, 5379.0], [51.5, 5380.0], [51.6, 5381.0], [51.7, 5381.0], [51.8, 5384.0], [51.9, 5389.0], [52.0, 5390.0], [52.1, 5390.0], [52.2, 5393.0], [52.3, 5394.0], [52.4, 5397.0], [52.5, 5397.0], [52.6, 5398.0], [52.7, 5398.0], [52.8, 5398.0], [52.9, 5398.0], [53.0, 5399.0], [53.1, 5400.0], [53.2, 5404.0], [53.3, 5404.0], [53.4, 5405.0], [53.5, 5406.0], [53.6, 5406.0], [53.7, 5406.0], [53.8, 5414.0], [53.9, 5421.0], [54.0, 5421.0], [54.1, 5422.0], [54.2, 5422.0], [54.3, 5428.0], [54.4, 5428.0], [54.5, 5431.0], [54.6, 5432.0], [54.7, 5432.0], [54.8, 5432.0], [54.9, 5433.0], [55.0, 5435.0], [55.1, 5435.0], [55.2, 5436.0], [55.3, 5439.0], [55.4, 5441.0], [55.5, 5441.0], [55.6, 5441.0], [55.7, 5445.0], [55.8, 5452.0], [55.9, 5452.0], [56.0, 5453.0], [56.1, 5462.0], [56.2, 5466.0], [56.3, 5466.0], [56.4, 5470.0], [56.5, 5473.0], [56.6, 5474.0], [56.7, 5474.0], [56.8, 5486.0], [56.9, 5488.0], [57.0, 5488.0], [57.1, 5491.0], [57.2, 5492.0], [57.3, 5494.0], [57.4, 5494.0], [57.5, 5495.0], [57.6, 5495.0], [57.7, 5495.0], [57.8, 5495.0], [57.9, 5496.0], [58.0, 5499.0], [58.1, 5502.0], [58.2, 5502.0], [58.3, 5506.0], [58.4, 5506.0], [58.5, 5506.0], [58.6, 5511.0], [58.7, 5526.0], [58.8, 5542.0], [58.9, 5542.0], [59.0, 5543.0], [59.1, 5546.0], [59.2, 5546.0], [59.3, 5546.0], [59.4, 5547.0], [59.5, 5547.0], [59.6, 5549.0], [59.7, 5549.0], [59.8, 5550.0], [59.9, 5550.0], [60.0, 5552.0], [60.1, 5552.0], [60.2, 5552.0], [60.3, 5552.0], [60.4, 5552.0], [60.5, 5568.0], [60.6, 5571.0], [60.7, 5574.0], [60.8, 5574.0], [60.9, 5575.0], [61.0, 5577.0], [61.1, 5582.0], [61.2, 5582.0], [61.3, 5584.0], [61.4, 5585.0], [61.5, 5588.0], [61.6, 5588.0], [61.7, 5597.0], [61.8, 5597.0], [61.9, 5597.0], [62.0, 5597.0], [62.1, 5600.0], [62.2, 5605.0], [62.3, 5605.0], [62.4, 5606.0], [62.5, 5614.0], [62.6, 5620.0], [62.7, 5620.0], [62.8, 5622.0], [62.9, 5625.0], [63.0, 5625.0], [63.1, 5625.0], [63.2, 5636.0], [63.3, 5636.0], [63.4, 5636.0], [63.5, 5639.0], [63.6, 5645.0], [63.7, 5647.0], [63.8, 5647.0], [63.9, 5649.0], [64.0, 5654.0], [64.1, 5661.0], [64.2, 5661.0], [64.3, 5662.0], [64.4, 5666.0], [64.5, 5666.0], [64.6, 5666.0], [64.7, 5671.0], [64.8, 5672.0], [64.9, 5673.0], [65.0, 5673.0], [65.1, 5673.0], [65.2, 5674.0], [65.3, 5674.0], [65.4, 5679.0], [65.5, 5679.0], [65.6, 5680.0], [65.7, 5680.0], [65.8, 5683.0], [65.9, 5685.0], [66.0, 5689.0], [66.1, 5689.0], [66.2, 5694.0], [66.3, 5695.0], [66.4, 5695.0], [66.5, 5695.0], [66.6, 5695.0], [66.7, 5695.0], [66.8, 5695.0], [66.9, 5701.0], [67.0, 5706.0], [67.1, 5710.0], [67.2, 5710.0], [67.3, 5711.0], [67.4, 5711.0], [67.5, 5711.0], [67.6, 5711.0], [67.7, 5713.0], [67.8, 5714.0], [67.9, 5715.0], [68.0, 5715.0], [68.1, 5715.0], [68.2, 5723.0], [68.3, 5724.0], [68.4, 5724.0], [68.5, 5726.0], [68.6, 5728.0], [68.7, 5728.0], [68.8, 5732.0], [68.9, 5739.0], [69.0, 5740.0], [69.1, 5740.0], [69.2, 5740.0], [69.3, 5756.0], [69.4, 5757.0], [69.5, 5757.0], [69.6, 5758.0], [69.7, 5759.0], [69.8, 5760.0], [69.9, 5760.0], [70.0, 5762.0], [70.1, 5766.0], [70.2, 5766.0], [70.3, 5773.0], [70.4, 5773.0], [70.5, 5774.0], [70.6, 5774.0], [70.7, 5777.0], [70.8, 5777.0], [70.9, 5780.0], [71.0, 5780.0], [71.1, 5785.0], [71.2, 5785.0], [71.3, 5788.0], [71.4, 5788.0], [71.5, 5790.0], [71.6, 5791.0], [71.7, 5791.0], [71.8, 5793.0], [71.9, 5797.0], [72.0, 5799.0], [72.1, 5799.0], [72.2, 5801.0], [72.3, 5801.0], [72.4, 5804.0], [72.5, 5804.0], [72.6, 5811.0], [72.7, 5814.0], [72.8, 5820.0], [72.9, 5820.0], [73.0, 5821.0], [73.1, 5831.0], [73.2, 5842.0], [73.3, 5842.0], [73.4, 5846.0], [73.5, 5850.0], [73.6, 5850.0], [73.7, 5858.0], [73.8, 5864.0], [73.9, 5867.0], [74.0, 5867.0], [74.1, 5871.0], [74.2, 5873.0], [74.3, 5876.0], [74.4, 5876.0], [74.5, 5878.0], [74.6, 5880.0], [74.7, 5880.0], [74.8, 5880.0], [74.9, 5882.0], [75.0, 5883.0], [75.1, 5883.0], [75.2, 5885.0], [75.3, 5889.0], [75.4, 5890.0], [75.5, 5890.0], [75.6, 5891.0], [75.7, 5893.0], [75.8, 5900.0], [75.9, 5900.0], [76.0, 5900.0], [76.1, 5901.0], [76.2, 5903.0], [76.3, 5903.0], [76.4, 5909.0], [76.5, 5917.0], [76.6, 5918.0], [76.7, 5918.0], [76.8, 5919.0], [76.9, 5919.0], [77.0, 5919.0], [77.1, 5920.0], [77.2, 5921.0], [77.3, 5923.0], [77.4, 5923.0], [77.5, 5923.0], [77.6, 5929.0], [77.7, 5930.0], [77.8, 5930.0], [77.9, 5931.0], [78.0, 5933.0], [78.1, 5933.0], [78.2, 5933.0], [78.3, 5934.0], [78.4, 5934.0], [78.5, 5934.0], [78.6, 5934.0], [78.7, 5938.0], [78.8, 5938.0], [78.9, 5938.0], [79.0, 5939.0], [79.1, 5939.0], [79.2, 5944.0], [79.3, 5944.0], [79.4, 5952.0], [79.5, 5954.0], [79.6, 5957.0], [79.7, 5957.0], [79.8, 5960.0], [79.9, 5965.0], [80.0, 5969.0], [80.1, 5969.0], [80.2, 5971.0], [80.3, 5984.0], [80.4, 5984.0], [80.5, 5984.0], [80.6, 5986.0], [80.7, 5990.0], [80.8, 5990.0], [80.9, 5991.0], [81.0, 5993.0], [81.1, 5997.0], [81.2, 5997.0], [81.3, 6002.0], [81.4, 6005.0], [81.5, 6010.0], [81.6, 6010.0], [81.7, 6021.0], [81.8, 6023.0], [81.9, 6023.0], [82.0, 6026.0], [82.1, 6036.0], [82.2, 6044.0], [82.3, 6044.0], [82.4, 6045.0], [82.5, 6050.0], [82.6, 6053.0], [82.7, 6053.0], [82.8, 6055.0], [82.9, 6058.0], [83.0, 6060.0], [83.1, 6060.0], [83.2, 6064.0], [83.3, 6066.0], [83.4, 6066.0], [83.5, 6067.0], [83.6, 6068.0], [83.7, 6069.0], [83.8, 6069.0], [83.9, 6071.0], [84.0, 6074.0], [84.1, 6077.0], [84.2, 6077.0], [84.3, 6080.0], [84.4, 6084.0], [84.5, 6103.0], [84.6, 6103.0], [84.7, 6106.0], [84.8, 6125.0], [84.9, 6129.0], [85.0, 6129.0], [85.1, 6137.0], [85.2, 6144.0], [85.3, 6144.0], [85.4, 6145.0], [85.5, 6149.0], [85.6, 6155.0], [85.7, 6155.0], [85.8, 6168.0], [85.9, 6180.0], [86.0, 6206.0], [86.1, 6206.0], [86.2, 6212.0], [86.3, 6238.0], [86.4, 6241.0], [86.5, 6241.0], [86.6, 6252.0], [86.7, 6263.0], [86.8, 6263.0], [86.9, 6264.0], [87.0, 6284.0], [87.1, 6287.0], [87.2, 6287.0], [87.3, 6294.0], [87.4, 6299.0], [87.5, 6306.0], [87.6, 6306.0], [87.7, 6337.0], [87.8, 6365.0], [87.9, 6373.0], [88.0, 6373.0], [88.1, 6383.0], [88.2, 6395.0], [88.3, 6395.0], [88.4, 6395.0], [88.5, 6419.0], [88.6, 6493.0], [88.7, 6493.0], [88.8, 6528.0], [88.9, 6537.0], [89.0, 6540.0], [89.1, 6540.0], [89.2, 6552.0], [89.3, 6614.0], [89.4, 6616.0], [89.5, 6616.0], [89.6, 6639.0], [89.7, 6706.0], [89.8, 6707.0], [89.9, 6707.0], [90.0, 6756.0], [90.1, 6782.0], [90.2, 6782.0], [90.3, 6831.0], [90.4, 6849.0], [90.5, 6924.0], [90.6, 6924.0], [90.7, 6928.0], [90.8, 6962.0], [90.9, 6974.0], [91.0, 6974.0], [91.1, 7039.0], [91.2, 7102.0], [91.3, 7127.0], [91.4, 7127.0], [91.5, 7161.0], [91.6, 7185.0], [91.7, 7185.0], [91.8, 7205.0], [91.9, 7214.0], [92.0, 7263.0], [92.1, 7263.0], [92.2, 7278.0], [92.3, 7278.0], [92.4, 7281.0], [92.5, 7281.0], [92.6, 7283.0], [92.7, 7283.0], [92.8, 7291.0], [92.9, 7291.0], [93.0, 7309.0], [93.1, 7312.0], [93.2, 7341.0], [93.3, 7341.0], [93.4, 7350.0], [93.5, 7360.0], [93.6, 7360.0], [93.7, 7418.0], [93.8, 7427.0], [93.9, 7430.0], [94.0, 7430.0], [94.1, 7439.0], [94.2, 7442.0], [94.3, 7486.0], [94.4, 7486.0], [94.5, 7490.0], [94.6, 7519.0], [94.7, 7525.0], [94.8, 7525.0], [94.9, 7539.0], [95.0, 7551.0], [95.1, 7551.0], [95.2, 7552.0], [95.3, 7562.0], [95.4, 7571.0], [95.5, 7571.0], [95.6, 7575.0], [95.7, 7631.0], [95.8, 7656.0], [95.9, 7656.0], [96.0, 7658.0], [96.1, 7663.0], [96.2, 7676.0], [96.3, 7676.0], [96.4, 7687.0], [96.5, 7735.0], [96.6, 7770.0], [96.7, 7770.0], [96.8, 7812.0], [96.9, 7826.0], [97.0, 7826.0], [97.1, 7826.0], [97.2, 7830.0], [97.3, 7879.0], [97.4, 7879.0], [97.5, 7989.0], [97.6, 8042.0], [97.7, 8054.0], [97.8, 8054.0], [97.9, 8077.0], [98.0, 8090.0], [98.1, 8112.0], [98.2, 8112.0], [98.3, 8126.0], [98.4, 8221.0], [98.5, 8221.0], [98.6, 8228.0], [98.7, 8232.0], [98.8, 8266.0], [98.9, 8266.0], [99.0, 8270.0], [99.1, 8309.0], [99.2, 8320.0], [99.3, 8320.0], [99.4, 8374.0], [99.5, 8398.0], [99.6, 8498.0], [99.7, 8498.0], [99.8, 8650.0], [99.9, 8717.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 41.0, "series": [{"data": [[2300.0, 2.0], [2700.0, 3.0], [2800.0, 4.0], [2900.0, 2.0], [3000.0, 3.0], [3100.0, 14.0], [3300.0, 7.0], [3200.0, 13.0], [3400.0, 12.0], [3500.0, 29.0], [3600.0, 18.0], [3700.0, 5.0], [3800.0, 14.0], [3900.0, 13.0], [4000.0, 23.0], [4300.0, 20.0], [4200.0, 11.0], [4100.0, 10.0], [4400.0, 18.0], [4500.0, 15.0], [4600.0, 10.0], [4800.0, 20.0], [4700.0, 11.0], [4900.0, 7.0], [5100.0, 24.0], [5000.0, 15.0], [5300.0, 41.0], [5200.0, 26.0], [5400.0, 37.0], [5600.0, 35.0], [5500.0, 29.0], [5700.0, 39.0], [5800.0, 27.0], [6000.0, 24.0], [5900.0, 40.0], [6100.0, 11.0], [6300.0, 7.0], [6200.0, 11.0], [6500.0, 4.0], [6600.0, 3.0], [6400.0, 2.0], [6700.0, 4.0], [6900.0, 4.0], [6800.0, 2.0], [7100.0, 4.0], [7000.0, 1.0], [7200.0, 9.0], [7400.0, 7.0], [7300.0, 5.0], [7500.0, 8.0], [7600.0, 6.0], [7700.0, 2.0], [7800.0, 5.0], [7900.0, 1.0], [8100.0, 2.0], [8000.0, 4.0], [8300.0, 4.0], [8200.0, 5.0], [8700.0, 1.0], [8600.0, 1.0], [8400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.166666666666666, "minX": 1.60219182E12, "maxY": 12.0, "series": [{"data": [[1.60219206E12, 12.0], [1.60219188E12, 12.0], [1.60219218E12, 10.166666666666666], [1.602192E12, 12.0], [1.60219182E12, 12.0], [1.60219212E12, 12.0], [1.60219194E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3190.0, "minX": 1.0, "maxY": 5234.0828729281675, "series": [{"data": [[8.0, 3594.0], [4.0, 3621.0], [2.0, 3591.0], [1.0, 3989.0], [9.0, 3588.0], [10.0, 3190.0], [5.0, 3617.0], [11.0, 3207.0], [12.0, 5234.0828729281675], [6.0, 3555.0], [3.0, 3623.0], [7.0, 3562.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5208.9972789115545]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 105.93333333333334, "minX": 1.60219182E12, "maxY": 412452.11666666664, "series": [{"data": [[1.60219206E12, 308940.13333333336], [1.60219188E12, 412452.11666666664], [1.60219218E12, 87687.45], [1.602192E12, 387018.15], [1.60219182E12, 61193.1], [1.60219212E12, 298309.11666666664], [1.60219194E12, 280168.9666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219206E12, 946.35], [1.60219188E12, 946.6666666666666], [1.60219218E12, 261.76666666666665], [1.602192E12, 1166.0666666666666], [1.60219182E12, 105.93333333333334], [1.60219212E12, 1091.3833333333334], [1.60219194E12, 1004.8666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4352.142857142857, "minX": 1.60219182E12, "maxY": 5759.111999999999, "series": [{"data": [[1.60219206E12, 5717.792000000001], [1.60219188E12, 5759.111999999999], [1.60219218E12, 4759.944444444446], [1.602192E12, 4549.108280254777], [1.60219182E12, 4352.142857142857], [1.60219212E12, 4953.9034482758625], [1.60219194E12, 5482.601503759398]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4350.285714285714, "minX": 1.60219182E12, "maxY": 5757.728000000005, "series": [{"data": [[1.60219206E12, 5716.591999999999], [1.60219188E12, 5757.728000000005], [1.60219218E12, 4758.888888888889], [1.602192E12, 4548.012738853502], [1.60219182E12, 4350.285714285714], [1.60219212E12, 4952.965517241381], [1.60219194E12, 5481.443609022555]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.044585987261146494, "minX": 1.60219182E12, "maxY": 10.714285714285715, "series": [{"data": [[1.60219206E12, 0.11199999999999999], [1.60219188E12, 0.056], [1.60219218E12, 0.33333333333333326], [1.602192E12, 0.044585987261146494], [1.60219182E12, 10.714285714285715], [1.60219212E12, 0.11034482758620695], [1.60219194E12, 0.11278195488721808]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2381.0, "minX": 1.60219182E12, "maxY": 8717.0, "series": [{"data": [[1.60219206E12, 7551.0], [1.60219188E12, 8717.0], [1.60219218E12, 6614.0], [1.602192E12, 7631.0], [1.60219182E12, 5885.0], [1.60219212E12, 7278.0], [1.60219194E12, 8498.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219206E12, 4315.401999909878], [1.60219188E12, 3173.4319985580446], [1.60219218E12, 3190.0], [1.602192E12, 2381.4219999623297], [1.60219182E12, 2741.0], [1.60219212E12, 3109.3139999651908], [1.60219194E12, 3375.3559991693496]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219206E12, 4315.742200036049], [1.60219188E12, 3178.8752005767824], [1.60219218E12, 3190.0], [1.602192E12, 2381.564200015068], [1.60219182E12, 2741.0], [1.60219212E12, 3109.4454000139235], [1.60219194E12, 3378.49160033226]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219206E12, 4315.5909999549385], [1.60219188E12, 3176.4559992790223], [1.60219218E12, 3190.0], [1.602192E12, 2381.500999981165], [1.60219182E12, 2741.0], [1.60219212E12, 3109.3869999825956], [1.60219194E12, 3377.0979995846747]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219206E12, 4315.0], [1.60219188E12, 3167.0], [1.60219218E12, 3190.0], [1.602192E12, 2381.0], [1.60219182E12, 2741.0], [1.60219212E12, 3109.0], [1.60219194E12, 3370.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219206E12, 5740.0], [1.60219188E12, 5711.0], [1.60219218E12, 5066.5], [1.602192E12, 4360.0], [1.60219182E12, 4206.0], [1.60219212E12, 5232.0], [1.60219194E12, 5495.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3986.0, "minX": 1.0, "maxY": 5695.0, "series": [{"data": [[2.0, 5592.5], [1.0, 5695.0], [4.0, 4011.5], [5.0, 3986.0], [3.0, 5269.0], [6.0, 4235.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3985.0, "minX": 1.0, "maxY": 5694.0, "series": [{"data": [[2.0, 5591.0], [1.0, 5694.0], [4.0, 4011.5], [5.0, 3985.0], [3.0, 5268.0], [6.0, 4235.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60219182E12, "maxY": 2.6166666666666667, "series": [{"data": [[1.60219206E12, 2.0833333333333335], [1.60219188E12, 2.0833333333333335], [1.60219218E12, 0.4], [1.602192E12, 2.6166666666666667], [1.60219182E12, 0.43333333333333335], [1.60219212E12, 2.4166666666666665], [1.60219194E12, 2.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60219182E12, "maxY": 2.6166666666666667, "series": [{"data": [[1.60219206E12, 2.0833333333333335], [1.60219188E12, 2.0833333333333335], [1.60219218E12, 0.6], [1.602192E12, 2.6166666666666667], [1.60219182E12, 0.23333333333333334], [1.60219212E12, 2.4166666666666665], [1.60219194E12, 2.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60219182E12, "maxY": 2.6166666666666667, "series": [{"data": [[1.60219206E12, 2.0833333333333335], [1.60219188E12, 2.0833333333333335], [1.60219218E12, 0.6], [1.602192E12, 2.6166666666666667], [1.60219182E12, 0.23333333333333334], [1.60219212E12, 2.4166666666666665], [1.60219194E12, 2.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60219182E12, "maxY": 2.6166666666666667, "series": [{"data": [[1.60219206E12, 2.0833333333333335], [1.60219188E12, 2.0833333333333335], [1.60219218E12, 0.6], [1.602192E12, 2.6166666666666667], [1.60219182E12, 0.23333333333333334], [1.60219212E12, 2.4166666666666665], [1.60219194E12, 2.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219218E12, "title": "Total Transactions Per Second"}},
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

