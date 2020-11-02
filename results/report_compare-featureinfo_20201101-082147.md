# QGIS Benchmark summary compare-featureinfo (20201101-082147)


compare different version of QGIS servers using the same settings

_run completed in 00h 03m 16s_

_Sample size per configuration 347_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201101-082147_plot.html)

## Summary
| name               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316            | Global  |                 19.3 | +0.0%                        |           69.5 | +3.9%                  |           436.5 | +241.0%                 |          137 |          900 |           347 |            0 |     4684.6 |    4654.75 |     4590.1 |      35.2 |     25.25 |      16.5 |          0 |
| qgis316-standalone | Global  |                 19.4 | +0.5%                        |           71.7 | +7.1%                  |           444.5 | +247.3%                 |          201 |         1016 |           347 |            0 |     4691.2 |    4666.5  |     4634.3 |      37.3 |     26.35 |      15.1 |          0 |
| qgis218            | Global  |                 20.4 | +5.7%                        |           66.9 | +0.0%                  |           128   | +0.0%                   |           53 |         7460 |           347 |            0 |     5091.4 |    4892.4  |     4640.7 |      95.4 |     60.15 |       4.8 |          0 |
| qgis310            | Global  |                 54.9 | +184.5%                      |          422.9 | +531.7%                |          2727.5 | +2030.9%                |         1363 |         3063 |           347 |            0 |     4693.2 |    4652.4  |     4630.8 |      42.5 |     16.5  |      12.7 |          0 |

## Aggregated
| name                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_grundplanav_farbig            | somap_grundplanav_farbig |                 10.8 | +0.0%                        |           36   | +0.0%                  |            62   | +0.0%                   |           32 |         4386 |           149 |            0 |     5091.4 |     5036.5 |     4834.9 |      95.4 |      65.2 |       4.8 |          0 |
| qgis316 > somap316_grundplanav_farbig            | somap_grundplanav_farbig |                 10.8 | +0.0%                        |           45.6 | +26.9%                 |           316   | +409.7%                 |           96 |          723 |           149 |            0 |     4684.6 |     4677.6 |     4671   |      35.2 |      22.8 |      16.5 |          0 |
| qgis316-standalone > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 11   | +1.9%                        |           48.2 | +34.0%                 |           326   | +425.8%                 |          173 |          813 |           149 |            0 |     4691.2 |     4677.2 |     4634.3 |      34.5 |      20.9 |      15.1 |          0 |
| qgis310 > somap310_grundplanav_farbig            | somap_grundplanav_farbig |                 39.3 | +263.9%                      |          328.5 | +813.6%                |          2236   | +3506.5%                |         1177 |         2521 |           149 |            0 |     4693.2 |     4665.8 |     4658.4 |      42.5 |      14.7 |      12.7 |          0 |
| qgis316-standalone > somap316_lk                 | somap_lk                 |                  8.4 | +0.0%                        |           23.5 | +0.0%                  |           118.5 | +79.5%                  |           28 |          203 |           198 |            0 |     4657.6 |     4655.8 |     4654.1 |      37.3 |      31.8 |      26.2 |          0 |
| qgis316 > somap316_lk                            | somap_lk                 |                  8.5 | +1.2%                        |           23.9 | +1.6%                  |           120.5 | +82.6%                  |           41 |          177 |           198 |            0 |     4649.6 |     4631.9 |     4590.1 |      33.2 |      27.7 |      21   |          0 |
| qgis218 > somap218_lk                            | somap_lk                 |                  9.6 | +14.3%                       |           31   | +31.9%                 |            66   | +0.0%                   |           21 |         3074 |           198 |            0 |     4846.1 |     4748.3 |     4640.7 |      92.8 |      55.1 |      30.9 |          0 |
| qgis310 > somap310_lk                            | somap_lk                 |                 15.6 | +85.7%                       |           94.4 | +301.7%                |           491.5 | +644.7%                 |          186 |          542 |           198 |            0 |     4648.8 |     4639   |     4630.8 |      37.8 |      18.3 |      14.2 |          0 |

## Detail
| name                                                                                                                                                                                                                   | group                                         |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201101-082147/qgis218/somap218_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                 10.8 | +0.0%                        |           36   | +0.0%                  |            62   | +0.0%                   |           149 |            0 |          0 |       241.342 |           32 |         4386 |         424   |        887    |       3327.5  |     29.8418  |              444.742   |           14.8552  |     5091.4 |     5036.5 |     4834.9 |      95.4 |      65.2 |       4.8 |
| [qgis316 > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201101-082147/qgis316/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                 10.8 | +0.0%                        |           45.6 | +26.9%                 |           316   | +409.7%                 |           149 |            0 |          0 |       306.369 |           96 |          723 |         394   |        443    |        721    |     29.7465  |               53.9969  |           14.8077  |     4684.6 |     4677.6 |     4671   |      35.2 |      22.8 |      16.5 |
| [qgis316-standalone > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201101-082147/qgis316-standalone/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html) | somap_grundplanav_farbig > featureinfo_av.txt |                 11   | +1.9%                        |           48.2 | +34.0%                 |           326   | +425.8%                 |           149 |            0 |          0 |       323.369 |          173 |          813 |         426   |        500.5  |        813    |     28.3324  |               48.6892  |           14.4912  |     4691.2 |     4677.2 |     4634.3 |      34.5 |      20.9 |      15.1 |
| [qgis310 > somap310_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201101-082147/qgis310/somap310_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                 39.3 | +263.9%                      |          328.5 | +813.6%                |          2236   | +3506.5%                |           149 |            0 |          0 |      2204.87  |         1177 |         2521 |        2394   |       2444.5  |       2518    |      4.36221 |                7.92698 |            2.1715  |     4693.2 |     4665.8 |     4658.4 |      42.5 |      14.7 |      12.7 |
| [qgis316-standalone > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201101-082147/qgis316-standalone/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                 | somap_lk > featureinfo_lk.txt                 |                  8.4 | +0.0%                        |           23.5 | +0.0%                  |           118.5 | +79.5%                  |           198 |            0 |          0 |       118.657 |           28 |          203 |         156.1 |        169.1  |        203    |     71.8693  |               59.1652  |           34.7756  |     4657.6 |     4655.8 |     4654.1 |      37.3 |      31.8 |      26.2 |
| [qgis316 > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201101-082147/qgis316/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                  8.5 | +1.2%                        |           23.9 | +1.6%                  |           120.5 | +82.6%                  |           198 |            0 |          0 |       120.586 |           41 |          177 |         161.1 |        167    |        172.05 |     70.689   |               65.3729  |           33.238   |     4649.6 |     4631.9 |     4590.1 |      33.2 |      27.7 |      21   |
| [qgis218 > somap218_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201101-082147/qgis218/somap218_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                  9.6 | +14.3%                       |           31   | +31.9%                 |            66   | +0.0%                   |           198 |            0 |          0 |       156.485 |           21 |         3074 |         114.2 |        359.85 |       3036.38 |     52.0505  |               56.8373  |           24.4741  |     4846.1 |     4748.3 |     4640.7 |      92.8 |      55.1 |      30.9 |
| [qgis310 > somap310_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201101-082147/qgis310/somap310_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                 15.6 | +85.7%                       |           94.4 | +301.7%                |           491.5 | +644.7%                 |           198 |            0 |          0 |       476.697 |          186 |          542 |         526   |        530.1  |        539.03 |     19.7881  |               18.3386  |            9.30438 |     4648.8 |     4639   |     4630.8 |      37.8 |      18.3 |      14.2 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - featureinfo_lk.txt
      somap218_grundplanav_farbig:
        - featureinfo_av.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - featureinfo_lk.txt
      somap310_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - featureinfo_lk.txt
      somap316_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316-standalone:
    active: yes
    inherit: qgis316
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - featureinfo_av.txt
      somap218_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - featureinfo_av.txt
      somap310_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ''
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```