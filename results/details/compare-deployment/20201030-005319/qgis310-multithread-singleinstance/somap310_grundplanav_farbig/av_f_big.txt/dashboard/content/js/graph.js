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
        data: {"result": {"minY": 2383.0, "minX": 0.0, "maxY": 8724.0, "series": [{"data": [[0.0, 2383.0], [0.1, 2383.0], [0.2, 2408.0], [0.3, 2710.0], [0.4, 2710.0], [0.5, 2787.0], [0.6, 2815.0], [0.7, 2845.0], [0.8, 2845.0], [0.9, 2895.0], [1.0, 2900.0], [1.1, 2965.0], [1.2, 2965.0], [1.3, 2991.0], [1.4, 3001.0], [1.5, 3012.0], [1.6, 3012.0], [1.7, 3065.0], [1.8, 3115.0], [1.9, 3115.0], [2.0, 3125.0], [2.1, 3130.0], [2.2, 3134.0], [2.3, 3134.0], [2.4, 3141.0], [2.5, 3142.0], [2.6, 3142.0], [2.7, 3142.0], [2.8, 3142.0], [2.9, 3144.0], [3.0, 3151.0], [3.1, 3151.0], [3.2, 3153.0], [3.3, 3159.0], [3.4, 3159.0], [3.5, 3161.0], [3.6, 3172.0], [3.7, 3209.0], [3.8, 3209.0], [3.9, 3223.0], [4.0, 3229.0], [4.1, 3236.0], [4.2, 3236.0], [4.3, 3248.0], [4.4, 3250.0], [4.5, 3256.0], [4.6, 3256.0], [4.7, 3270.0], [4.8, 3272.0], [4.9, 3273.0], [5.0, 3273.0], [5.1, 3292.0], [5.2, 3293.0], [5.3, 3293.0], [5.4, 3295.0], [5.5, 3298.0], [5.6, 3298.0], [5.7, 3298.0], [5.8, 3300.0], [5.9, 3336.0], [6.0, 3337.0], [6.1, 3337.0], [6.2, 3345.0], [6.3, 3361.0], [6.4, 3362.0], [6.5, 3362.0], [6.6, 3371.0], [6.7, 3381.0], [6.8, 3381.0], [6.9, 3387.0], [7.0, 3397.0], [7.1, 3400.0], [7.2, 3400.0], [7.3, 3416.0], [7.4, 3418.0], [7.5, 3428.0], [7.6, 3428.0], [7.7, 3449.0], [7.8, 3486.0], [7.9, 3495.0], [8.0, 3495.0], [8.1, 3512.0], [8.2, 3517.0], [8.3, 3522.0], [8.4, 3522.0], [8.5, 3538.0], [8.6, 3542.0], [8.7, 3542.0], [8.8, 3558.0], [8.9, 3558.0], [9.0, 3567.0], [9.1, 3567.0], [9.2, 3568.0], [9.3, 3569.0], [9.4, 3571.0], [9.5, 3571.0], [9.6, 3577.0], [9.7, 3577.0], [9.8, 3579.0], [9.9, 3579.0], [10.0, 3582.0], [10.1, 3583.0], [10.2, 3583.0], [10.3, 3585.0], [10.4, 3591.0], [10.5, 3599.0], [10.6, 3599.0], [10.7, 3602.0], [10.8, 3603.0], [10.9, 3611.0], [11.0, 3611.0], [11.1, 3617.0], [11.2, 3620.0], [11.3, 3622.0], [11.4, 3622.0], [11.5, 3623.0], [11.6, 3626.0], [11.7, 3626.0], [11.8, 3627.0], [11.9, 3627.0], [12.0, 3636.0], [12.1, 3636.0], [12.2, 3637.0], [12.3, 3640.0], [12.4, 3641.0], [12.5, 3641.0], [12.6, 3650.0], [12.7, 3664.0], [12.8, 3669.0], [12.9, 3669.0], [13.0, 3672.0], [13.1, 3678.0], [13.2, 3681.0], [13.3, 3681.0], [13.4, 3688.0], [13.5, 3693.0], [13.6, 3693.0], [13.7, 3698.0], [13.8, 3705.0], [13.9, 3711.0], [14.0, 3711.0], [14.1, 3727.0], [14.2, 3734.0], [14.3, 3738.0], [14.4, 3738.0], [14.5, 3745.0], [14.6, 3748.0], [14.7, 3769.0], [14.8, 3769.0], [14.9, 3770.0], [15.0, 3781.0], [15.1, 3781.0], [15.2, 3786.0], [15.3, 3786.0], [15.4, 3823.0], [15.5, 3823.0], [15.6, 3830.0], [15.7, 3858.0], [15.8, 3863.0], [15.9, 3863.0], [16.0, 3868.0], [16.1, 3884.0], [16.2, 3890.0], [16.3, 3890.0], [16.4, 3904.0], [16.5, 3904.0], [16.6, 3904.0], [16.7, 3904.0], [16.8, 3923.0], [16.9, 3925.0], [17.0, 3925.0], [17.1, 3940.0], [17.2, 3949.0], [17.3, 3951.0], [17.4, 3951.0], [17.5, 3956.0], [17.6, 3973.0], [17.7, 3990.0], [17.8, 3990.0], [17.9, 4000.0], [18.0, 4001.0], [18.1, 4002.0], [18.2, 4002.0], [18.3, 4016.0], [18.4, 4022.0], [18.5, 4022.0], [18.6, 4023.0], [18.7, 4030.0], [18.8, 4039.0], [18.9, 4039.0], [19.0, 4039.0], [19.1, 4041.0], [19.2, 4043.0], [19.3, 4043.0], [19.4, 4044.0], [19.5, 4053.0], [19.6, 4054.0], [19.7, 4054.0], [19.8, 4065.0], [19.9, 4066.0], [20.0, 4066.0], [20.1, 4066.0], [20.2, 4068.0], [20.3, 4071.0], [20.4, 4071.0], [20.5, 4080.0], [20.6, 4082.0], [20.7, 4084.0], [20.8, 4084.0], [20.9, 4089.0], [21.0, 4092.0], [21.1, 4094.0], [21.2, 4094.0], [21.3, 4105.0], [21.4, 4111.0], [21.5, 4118.0], [21.6, 4118.0], [21.7, 4121.0], [21.8, 4127.0], [21.9, 4127.0], [22.0, 4138.0], [22.1, 4142.0], [22.2, 4144.0], [22.3, 4144.0], [22.4, 4176.0], [22.5, 4185.0], [22.6, 4202.0], [22.7, 4202.0], [22.8, 4208.0], [22.9, 4221.0], [23.0, 4223.0], [23.1, 4223.0], [23.2, 4225.0], [23.3, 4233.0], [23.4, 4233.0], [23.5, 4237.0], [23.6, 4241.0], [23.7, 4252.0], [23.8, 4252.0], [23.9, 4255.0], [24.0, 4263.0], [24.1, 4274.0], [24.2, 4274.0], [24.3, 4287.0], [24.4, 4299.0], [24.5, 4300.0], [24.6, 4300.0], [24.7, 4301.0], [24.8, 4314.0], [24.9, 4324.0], [25.0, 4324.0], [25.1, 4335.0], [25.2, 4337.0], [25.3, 4337.0], [25.4, 4337.0], [25.5, 4337.0], [25.6, 4340.0], [25.7, 4340.0], [25.8, 4348.0], [25.9, 4355.0], [26.0, 4363.0], [26.1, 4363.0], [26.2, 4386.0], [26.3, 4387.0], [26.4, 4388.0], [26.5, 4388.0], [26.6, 4390.0], [26.7, 4395.0], [26.8, 4395.0], [26.9, 4395.0], [27.0, 4405.0], [27.1, 4408.0], [27.2, 4408.0], [27.3, 4408.0], [27.4, 4409.0], [27.5, 4424.0], [27.6, 4424.0], [27.7, 4446.0], [27.8, 4448.0], [27.9, 4450.0], [28.0, 4450.0], [28.1, 4458.0], [28.2, 4459.0], [28.3, 4460.0], [28.4, 4460.0], [28.5, 4465.0], [28.6, 4467.0], [28.7, 4467.0], [28.8, 4468.0], [28.9, 4468.0], [29.0, 4469.0], [29.1, 4469.0], [29.2, 4474.0], [29.3, 4478.0], [29.4, 4482.0], [29.5, 4482.0], [29.6, 4482.0], [29.7, 4484.0], [29.8, 4486.0], [29.9, 4486.0], [30.0, 4488.0], [30.1, 4494.0], [30.2, 4494.0], [30.3, 4495.0], [30.4, 4495.0], [30.5, 4498.0], [30.6, 4498.0], [30.7, 4516.0], [30.8, 4519.0], [30.9, 4542.0], [31.0, 4542.0], [31.1, 4551.0], [31.2, 4556.0], [31.3, 4561.0], [31.4, 4561.0], [31.5, 4570.0], [31.6, 4577.0], [31.7, 4577.0], [31.8, 4577.0], [31.9, 4579.0], [32.0, 4581.0], [32.1, 4581.0], [32.2, 4593.0], [32.3, 4605.0], [32.4, 4619.0], [32.5, 4619.0], [32.6, 4620.0], [32.7, 4638.0], [32.8, 4641.0], [32.9, 4641.0], [33.0, 4660.0], [33.1, 4672.0], [33.2, 4684.0], [33.3, 4684.0], [33.4, 4698.0], [33.5, 4704.0], [33.6, 4704.0], [33.7, 4709.0], [33.8, 4723.0], [33.9, 4729.0], [34.0, 4729.0], [34.1, 4751.0], [34.2, 4757.0], [34.3, 4760.0], [34.4, 4760.0], [34.5, 4773.0], [34.6, 4774.0], [34.7, 4783.0], [34.8, 4783.0], [34.9, 4826.0], [35.0, 4841.0], [35.1, 4841.0], [35.2, 4842.0], [35.3, 4848.0], [35.4, 4850.0], [35.5, 4850.0], [35.6, 4855.0], [35.7, 4864.0], [35.8, 4864.0], [35.9, 4864.0], [36.0, 4868.0], [36.1, 4874.0], [36.2, 4891.0], [36.3, 4891.0], [36.4, 4893.0], [36.5, 4904.0], [36.6, 4905.0], [36.7, 4905.0], [36.8, 4908.0], [36.9, 4908.0], [37.0, 4908.0], [37.1, 4928.0], [37.2, 4930.0], [37.3, 4948.0], [37.4, 4948.0], [37.5, 4948.0], [37.6, 4949.0], [37.7, 4952.0], [37.8, 4952.0], [37.9, 4954.0], [38.0, 4956.0], [38.1, 4962.0], [38.2, 4962.0], [38.3, 4965.0], [38.4, 4967.0], [38.5, 4967.0], [38.6, 4973.0], [38.7, 4994.0], [38.8, 4999.0], [38.9, 4999.0], [39.0, 5007.0], [39.1, 5011.0], [39.2, 5019.0], [39.3, 5019.0], [39.4, 5053.0], [39.5, 5054.0], [39.6, 5056.0], [39.7, 5056.0], [39.8, 5056.0], [39.9, 5058.0], [40.0, 5064.0], [40.1, 5064.0], [40.2, 5068.0], [40.3, 5071.0], [40.4, 5071.0], [40.5, 5072.0], [40.6, 5075.0], [40.7, 5078.0], [40.8, 5078.0], [40.9, 5079.0], [41.0, 5086.0], [41.1, 5093.0], [41.2, 5093.0], [41.3, 5096.0], [41.4, 5104.0], [41.5, 5117.0], [41.6, 5117.0], [41.7, 5123.0], [41.8, 5125.0], [41.9, 5125.0], [42.0, 5128.0], [42.1, 5129.0], [42.2, 5131.0], [42.3, 5131.0], [42.4, 5137.0], [42.5, 5138.0], [42.6, 5139.0], [42.7, 5139.0], [42.8, 5139.0], [42.9, 5139.0], [43.0, 5146.0], [43.1, 5146.0], [43.2, 5149.0], [43.3, 5152.0], [43.4, 5152.0], [43.5, 5160.0], [43.6, 5173.0], [43.7, 5178.0], [43.8, 5178.0], [43.9, 5185.0], [44.0, 5205.0], [44.1, 5208.0], [44.2, 5208.0], [44.3, 5210.0], [44.4, 5211.0], [44.5, 5212.0], [44.6, 5212.0], [44.7, 5213.0], [44.8, 5223.0], [44.9, 5223.0], [45.0, 5223.0], [45.1, 5224.0], [45.2, 5230.0], [45.3, 5230.0], [45.4, 5233.0], [45.5, 5242.0], [45.6, 5256.0], [45.7, 5256.0], [45.8, 5257.0], [45.9, 5258.0], [46.0, 5263.0], [46.1, 5263.0], [46.2, 5265.0], [46.3, 5270.0], [46.4, 5272.0], [46.5, 5272.0], [46.6, 5273.0], [46.7, 5277.0], [46.8, 5277.0], [46.9, 5278.0], [47.0, 5285.0], [47.1, 5289.0], [47.2, 5289.0], [47.3, 5302.0], [47.4, 5316.0], [47.5, 5318.0], [47.6, 5318.0], [47.7, 5321.0], [47.8, 5322.0], [47.9, 5338.0], [48.0, 5338.0], [48.1, 5338.0], [48.2, 5342.0], [48.3, 5348.0], [48.4, 5348.0], [48.5, 5349.0], [48.6, 5351.0], [48.7, 5351.0], [48.8, 5352.0], [48.9, 5354.0], [49.0, 5359.0], [49.1, 5359.0], [49.2, 5362.0], [49.3, 5364.0], [49.4, 5365.0], [49.5, 5365.0], [49.6, 5366.0], [49.7, 5369.0], [49.8, 5369.0], [49.9, 5369.0], [50.0, 5375.0], [50.1, 5380.0], [50.2, 5380.0], [50.3, 5382.0], [50.4, 5383.0], [50.5, 5384.0], [50.6, 5384.0], [50.7, 5389.0], [50.8, 5391.0], [50.9, 5392.0], [51.0, 5392.0], [51.1, 5396.0], [51.2, 5397.0], [51.3, 5404.0], [51.4, 5404.0], [51.5, 5406.0], [51.6, 5406.0], [51.7, 5406.0], [51.8, 5408.0], [51.9, 5411.0], [52.0, 5412.0], [52.1, 5412.0], [52.2, 5420.0], [52.3, 5425.0], [52.4, 5426.0], [52.5, 5426.0], [52.6, 5431.0], [52.7, 5435.0], [52.8, 5436.0], [52.9, 5436.0], [53.0, 5439.0], [53.1, 5442.0], [53.2, 5444.0], [53.3, 5444.0], [53.4, 5444.0], [53.5, 5448.0], [53.6, 5448.0], [53.7, 5449.0], [53.8, 5451.0], [53.9, 5451.0], [54.0, 5451.0], [54.1, 5453.0], [54.2, 5456.0], [54.3, 5457.0], [54.4, 5457.0], [54.5, 5461.0], [54.6, 5462.0], [54.7, 5466.0], [54.8, 5466.0], [54.9, 5467.0], [55.0, 5469.0], [55.1, 5469.0], [55.2, 5470.0], [55.3, 5471.0], [55.4, 5475.0], [55.5, 5475.0], [55.6, 5481.0], [55.7, 5482.0], [55.8, 5487.0], [55.9, 5487.0], [56.0, 5488.0], [56.1, 5488.0], [56.2, 5497.0], [56.3, 5497.0], [56.4, 5500.0], [56.5, 5503.0], [56.6, 5507.0], [56.7, 5507.0], [56.8, 5512.0], [56.9, 5514.0], [57.0, 5514.0], [57.1, 5514.0], [57.2, 5514.0], [57.3, 5519.0], [57.4, 5519.0], [57.5, 5528.0], [57.6, 5528.0], [57.7, 5530.0], [57.8, 5530.0], [57.9, 5532.0], [58.0, 5538.0], [58.1, 5538.0], [58.2, 5538.0], [58.3, 5539.0], [58.4, 5542.0], [58.5, 5542.0], [58.6, 5547.0], [58.7, 5547.0], [58.8, 5555.0], [58.9, 5555.0], [59.0, 5556.0], [59.1, 5559.0], [59.2, 5561.0], [59.3, 5561.0], [59.4, 5561.0], [59.5, 5565.0], [59.6, 5569.0], [59.7, 5569.0], [59.8, 5570.0], [59.9, 5572.0], [60.0, 5579.0], [60.1, 5579.0], [60.2, 5583.0], [60.3, 5583.0], [60.4, 5583.0], [60.5, 5585.0], [60.6, 5589.0], [60.7, 5589.0], [60.8, 5589.0], [60.9, 5593.0], [61.0, 5608.0], [61.1, 5611.0], [61.2, 5611.0], [61.3, 5611.0], [61.4, 5611.0], [61.5, 5616.0], [61.6, 5616.0], [61.7, 5622.0], [61.8, 5625.0], [61.9, 5625.0], [62.0, 5626.0], [62.1, 5626.0], [62.2, 5632.0], [62.3, 5632.0], [62.4, 5633.0], [62.5, 5635.0], [62.6, 5636.0], [62.7, 5636.0], [62.8, 5637.0], [62.9, 5639.0], [63.0, 5641.0], [63.1, 5641.0], [63.2, 5648.0], [63.3, 5648.0], [63.4, 5648.0], [63.5, 5648.0], [63.6, 5650.0], [63.7, 5651.0], [63.8, 5651.0], [63.9, 5652.0], [64.0, 5653.0], [64.1, 5656.0], [64.2, 5656.0], [64.3, 5656.0], [64.4, 5656.0], [64.5, 5659.0], [64.6, 5659.0], [64.7, 5659.0], [64.8, 5665.0], [64.9, 5672.0], [65.0, 5672.0], [65.1, 5675.0], [65.2, 5676.0], [65.3, 5676.0], [65.4, 5678.0], [65.5, 5680.0], [65.6, 5686.0], [65.7, 5686.0], [65.8, 5686.0], [65.9, 5686.0], [66.0, 5687.0], [66.1, 5687.0], [66.2, 5697.0], [66.3, 5700.0], [66.4, 5701.0], [66.5, 5701.0], [66.6, 5702.0], [66.7, 5704.0], [66.8, 5704.0], [66.9, 5706.0], [67.0, 5708.0], [67.1, 5712.0], [67.2, 5712.0], [67.3, 5717.0], [67.4, 5719.0], [67.5, 5725.0], [67.6, 5725.0], [67.7, 5729.0], [67.8, 5730.0], [67.9, 5731.0], [68.0, 5731.0], [68.1, 5740.0], [68.2, 5740.0], [68.3, 5741.0], [68.4, 5741.0], [68.5, 5746.0], [68.6, 5747.0], [68.7, 5747.0], [68.8, 5749.0], [68.9, 5752.0], [69.0, 5754.0], [69.1, 5754.0], [69.2, 5754.0], [69.3, 5756.0], [69.4, 5759.0], [69.5, 5759.0], [69.6, 5761.0], [69.7, 5761.0], [69.8, 5763.0], [69.9, 5763.0], [70.0, 5769.0], [70.1, 5769.0], [70.2, 5769.0], [70.3, 5770.0], [70.4, 5772.0], [70.5, 5774.0], [70.6, 5774.0], [70.7, 5778.0], [70.8, 5780.0], [70.9, 5781.0], [71.0, 5781.0], [71.1, 5790.0], [71.2, 5791.0], [71.3, 5795.0], [71.4, 5795.0], [71.5, 5800.0], [71.6, 5803.0], [71.7, 5803.0], [71.8, 5803.0], [71.9, 5806.0], [72.0, 5809.0], [72.1, 5809.0], [72.2, 5809.0], [72.3, 5810.0], [72.4, 5810.0], [72.5, 5810.0], [72.6, 5811.0], [72.7, 5811.0], [72.8, 5813.0], [72.9, 5813.0], [73.0, 5817.0], [73.1, 5823.0], [73.2, 5829.0], [73.3, 5829.0], [73.4, 5829.0], [73.5, 5831.0], [73.6, 5831.0], [73.7, 5831.0], [73.8, 5834.0], [73.9, 5838.0], [74.0, 5838.0], [74.1, 5846.0], [74.2, 5847.0], [74.3, 5849.0], [74.4, 5849.0], [74.5, 5849.0], [74.6, 5849.0], [74.7, 5850.0], [74.8, 5850.0], [74.9, 5850.0], [75.0, 5855.0], [75.1, 5855.0], [75.2, 5856.0], [75.3, 5859.0], [75.4, 5872.0], [75.5, 5872.0], [75.6, 5874.0], [75.7, 5875.0], [75.8, 5875.0], [75.9, 5875.0], [76.0, 5884.0], [76.1, 5885.0], [76.2, 5887.0], [76.3, 5887.0], [76.4, 5894.0], [76.5, 5895.0], [76.6, 5895.0], [76.7, 5895.0], [76.8, 5900.0], [76.9, 5900.0], [77.0, 5900.0], [77.1, 5901.0], [77.2, 5902.0], [77.3, 5902.0], [77.4, 5902.0], [77.5, 5904.0], [77.6, 5905.0], [77.7, 5910.0], [77.8, 5910.0], [77.9, 5914.0], [78.0, 5914.0], [78.1, 5914.0], [78.2, 5914.0], [78.3, 5917.0], [78.4, 5934.0], [78.5, 5934.0], [78.6, 5936.0], [78.7, 5949.0], [78.8, 5950.0], [78.9, 5950.0], [79.0, 5950.0], [79.1, 5956.0], [79.2, 5958.0], [79.3, 5958.0], [79.4, 5959.0], [79.5, 5967.0], [79.6, 5968.0], [79.7, 5968.0], [79.8, 5969.0], [79.9, 5975.0], [80.0, 5980.0], [80.1, 5980.0], [80.2, 5982.0], [80.3, 5986.0], [80.4, 5986.0], [80.5, 5986.0], [80.6, 5994.0], [80.7, 5996.0], [80.8, 5996.0], [80.9, 5997.0], [81.0, 5999.0], [81.1, 6001.0], [81.2, 6001.0], [81.3, 6006.0], [81.4, 6008.0], [81.5, 6009.0], [81.6, 6009.0], [81.7, 6009.0], [81.8, 6015.0], [81.9, 6015.0], [82.0, 6024.0], [82.1, 6025.0], [82.2, 6025.0], [82.3, 6025.0], [82.4, 6028.0], [82.5, 6030.0], [82.6, 6032.0], [82.7, 6032.0], [82.8, 6032.0], [82.9, 6033.0], [83.0, 6045.0], [83.1, 6045.0], [83.2, 6051.0], [83.3, 6052.0], [83.4, 6052.0], [83.5, 6053.0], [83.6, 6055.0], [83.7, 6059.0], [83.8, 6059.0], [83.9, 6063.0], [84.0, 6071.0], [84.1, 6074.0], [84.2, 6074.0], [84.3, 6081.0], [84.4, 6081.0], [84.5, 6082.0], [84.6, 6082.0], [84.7, 6085.0], [84.8, 6086.0], [84.9, 6086.0], [85.0, 6086.0], [85.1, 6089.0], [85.2, 6091.0], [85.3, 6091.0], [85.4, 6095.0], [85.5, 6105.0], [85.6, 6108.0], [85.7, 6108.0], [85.8, 6115.0], [85.9, 6133.0], [86.0, 6134.0], [86.1, 6134.0], [86.2, 6136.0], [86.3, 6154.0], [86.4, 6163.0], [86.5, 6163.0], [86.6, 6176.0], [86.7, 6185.0], [86.8, 6185.0], [86.9, 6187.0], [87.0, 6191.0], [87.1, 6198.0], [87.2, 6198.0], [87.3, 6212.0], [87.4, 6214.0], [87.5, 6233.0], [87.6, 6233.0], [87.7, 6246.0], [87.8, 6264.0], [87.9, 6286.0], [88.0, 6286.0], [88.1, 6287.0], [88.2, 6317.0], [88.3, 6341.0], [88.4, 6341.0], [88.5, 6358.0], [88.6, 6361.0], [88.7, 6361.0], [88.8, 6377.0], [88.9, 6379.0], [89.0, 6380.0], [89.1, 6380.0], [89.2, 6386.0], [89.3, 6394.0], [89.4, 6398.0], [89.5, 6398.0], [89.6, 6409.0], [89.7, 6416.0], [89.8, 6418.0], [89.9, 6418.0], [90.0, 6436.0], [90.1, 6450.0], [90.2, 6450.0], [90.3, 6459.0], [90.4, 6504.0], [90.5, 6532.0], [90.6, 6532.0], [90.7, 6556.0], [90.8, 6574.0], [90.9, 6618.0], [91.0, 6618.0], [91.1, 6737.0], [91.2, 6768.0], [91.3, 6781.0], [91.4, 6781.0], [91.5, 6789.0], [91.6, 6850.0], [91.7, 6850.0], [91.8, 6888.0], [91.9, 6910.0], [92.0, 6928.0], [92.1, 6928.0], [92.2, 6998.0], [92.3, 6998.0], [92.4, 7054.0], [92.5, 7054.0], [92.6, 7068.0], [92.7, 7090.0], [92.8, 7163.0], [92.9, 7163.0], [93.0, 7173.0], [93.1, 7198.0], [93.2, 7205.0], [93.3, 7205.0], [93.4, 7219.0], [93.5, 7262.0], [93.6, 7262.0], [93.7, 7281.0], [93.8, 7318.0], [93.9, 7319.0], [94.0, 7319.0], [94.1, 7324.0], [94.2, 7336.0], [94.3, 7349.0], [94.4, 7349.0], [94.5, 7382.0], [94.6, 7383.0], [94.7, 7386.0], [94.8, 7386.0], [94.9, 7406.0], [95.0, 7408.0], [95.1, 7408.0], [95.2, 7418.0], [95.3, 7422.0], [95.4, 7450.0], [95.5, 7450.0], [95.6, 7450.0], [95.7, 7453.0], [95.8, 7487.0], [95.9, 7487.0], [96.0, 7506.0], [96.1, 7516.0], [96.2, 7530.0], [96.3, 7530.0], [96.4, 7550.0], [96.5, 7571.0], [96.6, 7575.0], [96.7, 7575.0], [96.8, 7587.0], [96.9, 7600.0], [97.0, 7600.0], [97.1, 7622.0], [97.2, 7625.0], [97.3, 7659.0], [97.4, 7659.0], [97.5, 7674.0], [97.6, 7687.0], [97.7, 7696.0], [97.8, 7696.0], [97.9, 7771.0], [98.0, 7790.0], [98.1, 7792.0], [98.2, 7792.0], [98.3, 7797.0], [98.4, 7867.0], [98.5, 7867.0], [98.6, 7899.0], [98.7, 7906.0], [98.8, 7951.0], [98.9, 7951.0], [99.0, 7977.0], [99.1, 8098.0], [99.2, 8139.0], [99.3, 8139.0], [99.4, 8165.0], [99.5, 8166.0], [99.6, 8426.0], [99.7, 8426.0], [99.8, 8675.0], [99.9, 8724.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 39.0, "series": [{"data": [[2300.0, 1.0], [2400.0, 1.0], [2700.0, 2.0], [2800.0, 3.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 14.0], [3300.0, 10.0], [3200.0, 15.0], [3400.0, 7.0], [3500.0, 19.0], [3700.0, 12.0], [3600.0, 23.0], [3800.0, 7.0], [3900.0, 11.0], [4000.0, 25.0], [4200.0, 14.0], [4300.0, 18.0], [4100.0, 10.0], [4500.0, 12.0], [4600.0, 9.0], [4400.0, 27.0], [4700.0, 10.0], [4800.0, 12.0], [5000.0, 18.0], [5100.0, 19.0], [4900.0, 18.0], [5200.0, 24.0], [5300.0, 30.0], [5500.0, 34.0], [5400.0, 37.0], [5600.0, 39.0], [5700.0, 38.0], [5800.0, 39.0], [6000.0, 32.0], [6100.0, 13.0], [5900.0, 32.0], [6300.0, 10.0], [6200.0, 7.0], [6500.0, 4.0], [6600.0, 1.0], [6400.0, 6.0], [6800.0, 2.0], [6900.0, 4.0], [6700.0, 4.0], [7000.0, 3.0], [7100.0, 3.0], [7200.0, 4.0], [7300.0, 8.0], [7400.0, 8.0], [7500.0, 7.0], [7600.0, 7.0], [7900.0, 3.0], [7700.0, 4.0], [7800.0, 2.0], [8000.0, 1.0], [8100.0, 3.0], [8600.0, 1.0], [8700.0, 1.0], [8400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.130434782608695, "minX": 1.60402092E12, "maxY": 12.0, "series": [{"data": [[1.60402116E12, 12.0], [1.60402098E12, 12.0], [1.60402128E12, 9.130434782608695], [1.6040211E12, 12.0], [1.60402092E12, 12.0], [1.60402122E12, 12.0], [1.60402104E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402128E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3142.0, "minX": 1.0, "maxY": 5216.193370165747, "series": [{"data": [[8.0, 3569.0], [4.0, 3627.0], [2.0, 3603.0], [1.0, 3990.0], [9.0, 3558.0], [10.0, 3142.0], [5.0, 3641.0], [11.0, 3142.0], [12.0, 5216.193370165747], [6.0, 3582.0], [3.0, 3620.0], [7.0, 3577.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5191.258503401362]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 152.31666666666666, "minX": 1.60402092E12, "maxY": 392325.7833333333, "series": [{"data": [[1.60402116E12, 304455.85], [1.60402098E12, 386192.6666666667], [1.60402128E12, 22949.15], [1.6040211E12, 392325.7833333333], [1.60402092E12, 111669.76666666666], [1.60402122E12, 332101.0], [1.60402104E12, 286096.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402116E12, 946.6666666666666], [1.60402098E12, 990.9333333333333], [1.60402128E12, 159.68333333333334], [1.6040211E12, 1108.3833333333334], [1.60402092E12, 152.31666666666666], [1.60402122E12, 1087.3666666666666], [1.60402104E12, 1077.6833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402128E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4204.521739130435, "minX": 1.60402092E12, "maxY": 5801.7919999999995, "series": [{"data": [[1.60402116E12, 5801.7919999999995], [1.60402098E12, 5624.984732824428], [1.60402128E12, 4204.521739130435], [1.6040211E12, 4725.879194630872], [1.60402092E12, 5325.65], [1.60402122E12, 4972.78472222222], [1.60402104E12, 5105.062937062937]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402128E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4203.956521739131, "minX": 1.60402092E12, "maxY": 5800.607999999998, "series": [{"data": [[1.60402116E12, 5800.607999999998], [1.60402098E12, 5623.6259541984755], [1.60402128E12, 4203.956521739131], [1.6040211E12, 4724.657718120805], [1.60402092E12, 5323.4], [1.60402122E12, 4971.729166666667], [1.60402104E12, 5104.034965034964]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402128E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.040268456375838924, "minX": 1.60402092E12, "maxY": 7.699999999999999, "series": [{"data": [[1.60402116E12, 0.11199999999999996], [1.60402098E12, 0.11450381679389314], [1.60402128E12, 0.34782608695652173], [1.6040211E12, 0.040268456375838924], [1.60402092E12, 7.699999999999999], [1.60402122E12, 0.09027777777777779], [1.60402104E12, 0.0979020979020979]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402128E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2383.0, "minX": 1.60402092E12, "maxY": 8724.0, "series": [{"data": [[1.60402116E12, 7659.0], [1.60402098E12, 8724.0], [1.60402128E12, 6025.0], [1.6040211E12, 7625.0], [1.60402092E12, 7450.0], [1.60402122E12, 6998.0], [1.60402104E12, 6214.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402116E12, 4277.483999218941], [1.60402098E12, 3117.819999527931], [1.60402128E12, 3142.0], [1.6040211E12, 2391.7499991059303], [1.60402092E12, 2710.0], [1.60402122E12, 3127.7449996888636], [1.60402104E12, 3296.479999828339]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402116E12, 4280.432400312424], [1.60402098E12, 3119.6020001888273], [1.60402128E12, 3142.0], [1.6040211E12, 2395.125000357628], [1.60402092E12, 2710.0], [1.60402122E12, 3128.9195001244543], [1.60402104E12, 3297.1280000686647]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402116E12, 4279.121999609471], [1.60402098E12, 3118.8099997639656], [1.60402128E12, 3142.0], [1.6040211E12, 2393.624999552965], [1.60402092E12, 2710.0], [1.60402122E12, 3128.397499844432], [1.60402104E12, 3296.8399999141693]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402116E12, 4274.0], [1.60402098E12, 3115.0], [1.60402128E12, 3142.0], [1.6040211E12, 2383.0], [1.60402092E12, 2710.0], [1.60402122E12, 3125.0], [1.60402104E12, 3295.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402116E12, 5831.0], [1.60402098E12, 5608.0], [1.60402128E12, 3641.0], [1.6040211E12, 4516.0], [1.60402092E12, 5399.5], [1.60402122E12, 5138.5], [1.60402104E12, 5467.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3784.5, "minX": 1.0, "maxY": 6118.0, "series": [{"data": [[2.0, 5561.0], [4.0, 3907.5], [1.0, 6118.0], [5.0, 3784.5], [3.0, 5278.0], [6.0, 4072.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3784.0, "minX": 1.0, "maxY": 6116.0, "series": [{"data": [[2.0, 5559.5], [4.0, 3907.5], [1.0, 6116.0], [5.0, 3784.0], [3.0, 5277.0], [6.0, 4072.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60402092E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60402116E12, 2.0833333333333335], [1.60402098E12, 2.183333333333333], [1.60402128E12, 0.18333333333333332], [1.6040211E12, 2.4833333333333334], [1.60402092E12, 0.5333333333333333], [1.60402122E12, 2.4], [1.60402104E12, 2.3833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402128E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60402092E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60402116E12, 2.0833333333333335], [1.60402098E12, 2.183333333333333], [1.60402128E12, 0.38333333333333336], [1.6040211E12, 2.4833333333333334], [1.60402092E12, 0.3333333333333333], [1.60402122E12, 2.4], [1.60402104E12, 2.3833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402128E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60402092E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60402116E12, 2.0833333333333335], [1.60402098E12, 2.183333333333333], [1.60402128E12, 0.38333333333333336], [1.6040211E12, 2.4833333333333334], [1.60402092E12, 0.3333333333333333], [1.60402122E12, 2.4], [1.60402104E12, 2.3833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402128E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60402092E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60402116E12, 2.0833333333333335], [1.60402098E12, 2.183333333333333], [1.60402128E12, 0.38333333333333336], [1.6040211E12, 2.4833333333333334], [1.60402092E12, 0.3333333333333333], [1.60402122E12, 2.4], [1.60402104E12, 2.3833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402128E12, "title": "Total Transactions Per Second"}},
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

