import React from 'react';
import Svg, { Defs, Path, G, Mask, Use } from 'react-native-svg';
import type { SVGProps } from './types';

export const StoreSVG = ({ color = '#fff' }: SVGProps) => (
  <Svg width={197} height={199} viewBox="0 0 197 199">
    <Defs>
      <Path
        d="M94.09 10.797c-46.392 0-84 37.609-84 84 0 46.392 37.608 84 84 84s84-37.608 84-84c0-46.391-37.608-84-84-84zm0-10c51.915 0 94 42.086 94 94 0 24.4-9.296 46.629-24.54 63.337l-.026.027 31.385 31.383a4.999 4.999 0 11-7.071 7.071L156.4 165.18l-.047.042c-16.22 14.352-37.436 23.187-60.708 23.564l-1.555.013c-51.914 0-94-42.086-94-94 0-51.915 42.086-94 94-94z"
        id="prefix__a"
      />
      <Path
        d="M4.947.116a8.21 8.21 0 011.663.19c.288.064.565.146.831.246s.502.217.707.352c.205.134.37.286.494.457.125.171.187.362.187.572a.808.808 0 01-.256.6.879.879 0 01-.6.234.86.86 0 01-.404-.095 9.526 9.526 0 00-.64-.3 4.839 4.839 0 00-.59-.205 4.068 4.068 0 00-.604-.117 5.892 5.892 0 00-.685-.037c-.235 0-.465.02-.692.062-.227.042-.43.108-.608.198-.178.09-.323.206-.432.348a.823.823 0 00-.165.52.82.82 0 00.234.593c.156.162.36.3.612.418.251.117.536.22.853.308.317.087.637.178.96.27.517.157.987.323 1.41.498.422.176.783.386 1.083.63.3.245.533.534.696.868.164.335.246.736.246 1.205 0 .513-.102.974-.304 1.384-.203.41-.495.76-.876 1.048-.38.288-.84.509-1.38.663-.54.153-1.146.23-1.82.23a8.927 8.927 0 01-2.066-.241 7.04 7.04 0 01-.923-.286 4.026 4.026 0 01-.754-.38 1.915 1.915 0 01-.505-.466.901.901 0 01-.183-.538c0-.122.025-.242.076-.36.052-.116.118-.223.198-.318.08-.095.171-.172.271-.23a.584.584 0 01.297-.088c.088 0 .173.014.256.044.083.029.167.064.253.106.085.041.173.086.264.135.09.05.186.093.289.132.337.152.715.288 1.135.41.42.122.86.183 1.318.183.25 0 .485-.023.707-.07.222-.046.418-.116.586-.212.169-.095.302-.218.4-.37a.992.992 0 00.146-.549 1.02 1.02 0 00-.33-.765 1.615 1.615 0 00-.359-.25 3.438 3.438 0 00-.432-.186l-.33-.117A3.164 3.164 0 015 6.778a2.516 2.516 0 00-.19-.063l-.382-.11a4.31 4.31 0 01-.212-.054 2.417 2.417 0 01-.293-.103 3.326 3.326 0 00-.154-.055l-.688-.242a8.018 8.018 0 01-1.143-.505 3.011 3.011 0 01-.776-.593c-.2-.22-.348-.47-.443-.751a3.045 3.045 0 01-.143-.978c0-.488.101-.93.304-1.325A2.87 2.87 0 011.75.988 4.228 4.228 0 013.127.343a6.737 6.737 0 011.82-.227zm22.185 0c.855 0 1.61.135 2.263.403a4.414 4.414 0 011.641 1.139c.44.49.772 1.078.996 1.761.225.684.337 1.44.337 2.27 0 .816-.11 1.566-.33 2.25a4.81 4.81 0 01-.988 1.761c-.44.49-.986.873-1.64 1.146-.655.274-1.414.41-2.279.41-.844 0-1.593-.132-2.245-.395a4.455 4.455 0 01-1.644-1.124 4.806 4.806 0 01-1.007-1.755c-.227-.683-.34-1.447-.34-2.292 0-.806.108-1.55.325-2.234a4.858 4.858 0 01.978-1.765A4.473 4.473 0 0124.833.534c.654-.279 1.42-.418 2.3-.418zm-8.357.242c.19 0 .368.037.531.11.164.073.308.174.433.304a1.467 1.467 0 01.4 1.014l-.001 7.786c0 .2-.036.387-.107.56-.07.173-.168.325-.292.454-.125.13-.269.23-.433.304-.163.073-.34.11-.53.11-.191 0-.368-.037-.532-.11a1.33 1.33 0 01-.428-.304 1.458 1.458 0 01-.396-1.014l-.007-3.025h-3.772v3.025c0 .2-.035.387-.106.56-.07.173-.169.325-.293.454-.125.13-.269.23-.432.304-.164.073-.34.11-.531.11-.19 0-.368-.037-.531-.11a1.33 1.33 0 01-.429-.304 1.458 1.458 0 01-.395-1.014V1.786a1.468 1.468 0 01.395-1.014c.122-.13.265-.231.429-.304.163-.074.34-.11.53-.11.191 0 .368.037.532.11.163.073.307.174.432.304.124.13.222.28.293.454.07.173.106.36.106.56V4.46h3.772V1.787c0-.2.037-.387.11-.56.073-.173.17-.325.293-.454.122-.13.265-.231.428-.304.164-.074.341-.11.531-.11zm19.776 0a8.77 8.77 0 011.622.146c.52.098.98.27 1.38.517.401.246.72.582.96 1.007.24.425.36.962.36 1.611 0 .562-.105 1.049-.312 1.461-.208.413-.5.756-.88 1.03a3.963 3.963 0 01-1.365.611 7.218 7.218 0 01-1.765.201h-1.678v2.63c0 .2-.036.387-.11.56a1.477 1.477 0 01-.296.454c-.124.13-.268.23-.432.304-.164.073-.34.11-.531.11-.19 0-.367-.037-.531-.11a1.33 1.33 0 01-.429-.304 1.46 1.46 0 01-.395-1.014v-7.2c0-.278.018-.54.055-.787a1.56 1.56 0 01.234-.641c.12-.18.296-.324.528-.429.231-.105.545-.157.94-.157h2.645zM27.132 2.013c-.41 0-.765.082-1.065.246a2 2 0 00-.744.714c-.195.312-.34.697-.436 1.153a7.706 7.706 0 00-.142 1.564c0 1.21.192 2.125.578 2.743.386.617.989.926 1.81.926.805 0 1.406-.307 1.801-.922.396-.616.593-1.531.593-2.747 0-.586-.047-1.107-.143-1.564-.095-.456-.24-.84-.435-1.153a2 2 0 00-.744-.714c-.3-.164-.658-.246-1.073-.246zm11.096-.007h-1.355v3.303h1.231c.313 0 .598-.027.857-.08.259-.054.48-.143.663-.268.183-.124.326-.29.428-.494.103-.205.154-.481.154-.828 0-.342-.049-.611-.146-.81a1.257 1.257 0 00-.407-.479 1.714 1.714 0 00-.622-.264 3.703 3.703 0 00-.803-.08z"
        id="prefix__c"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <G opacity={0.5}>
        <Mask id="prefix__b" fill={color}>
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          fill={color}
          mask="url(#prefix__b)"
          d="M-45.917 94.797L94.09-45.21l174.863 174.863L128.946 269.66z"
        />
      </G>
      <Path
        d="M127.562 90h-75.57c-.54 0-.992.449-.992 1.002v5.068c0 3.267 2.659 5.93 5.939 5.93a5.943 5.943 0 005.866-5h.289a5.944 5.944 0 005.865 5 5.943 5.943 0 005.867-5h.288a5.944 5.944 0 005.866 5 5.943 5.943 0 005.866-5h.289a5.944 5.944 0 005.866 5c2.49 0 4.63-1.537 5.51-3.715A5.946 5.946 0 00104.02 102a5.943 5.943 0 005.866-5h.289a5.944 5.944 0 005.866 5 5.943 5.943 0 005.866-5h.288a5.944 5.944 0 005.866 5c3.273 0 5.939-2.655 5.939-5.93v-5.068c0-.546-.444-1.002-.992-1.002h-5.446z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        stroke={color}
        strokeWidth={2}
        d="M104.071 102v34M130.071 102v34M126.071 102v34M59.071 102v34M55.071 102v34"
      />
      <Path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        d="M48.071 137h92M83.071 153h12M74.071 145h10M94.071 145h20M108.071 122v2"
      />
      <Path
        d="M109.071 114.01c0-.558.456-1.01 1.003-1.01h9.995a1 1 0 011.002 1.01v1.98a1.01 1.01 0 01-1.002 1.01h-9.995a1 1 0 01-1.003-1.01v-1.98z"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
        d="M111.071 113l3.965-5h0l3.964 5"
      />
      <Path
        stroke={color}
        strokeWidth={2}
        d="M60 125h44M51 90c0-.552.323-1.297.74-1.68L63.34 77.68c.409-.376 1.183-.68 1.742-.68h54.997c.553 0 1.333.309 1.733.68l11.457 10.64c.404.376.732 1.133.732 1.68h0-83 0zM110.071 71v7M75.071 71v7M65 55c0-2.21 1.799-4 4-4h47a4 4 0 014 4v13c0 2.21-1.799 4-4 4H69a4 4 0 01-4-4V55z"
      />
      <G transform="translate(71 56)">
        <Mask id="prefix__d" fill={color}>
          <Use xlinkHref="#prefix__c" />
        </Mask>
        <Path
          fill={color}
          mask="url(#prefix__d)"
          d="M-4.564-4.884h52.436v21.14H-4.564z"
        />
      </G>
    </G>
  </Svg>
);
