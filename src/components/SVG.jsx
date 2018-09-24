/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { width as twWidth } from '../../tailwind';

const Wrapper = styled.svg`
  ${tw('stroke-current absolute')};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  badge: {
    shape: (
        <path d="M32.2429453,24.8287318 L30.8198574,23.4056439 C31.8729184,22.0509601 32.5,20.3487115 32.5,18.5 C32.5,14.081722 28.918278,10.5 24.5,10.5 C20.081722,10.5 16.5,14.081722 16.5,18.5 C16.5,22.918278 20.081722,26.5 24.5,26.5 C26.3487115,26.5 28.0509601,25.8729184 29.4056439,24.8198574 L30.8287318,26.2429453 C29.1048612,27.6536347 26.9012702,28.5 24.5,28.5 C18.9771525,28.5 14.5,24.0228475 14.5,18.5 C14.5,12.9771525 18.9771525,8.5 24.5,8.5 C30.0228475,8.5 34.5,12.9771525 34.5,18.5 C34.5,20.9012702 33.6536347,23.1048612 32.2429453,24.8287318 Z M18,33.2413215 L15.7631397,33.9461524 L14.5127753,28.3109857 C14.3764962,28.172274 14.2430846,28.030736 14.1126362,27.8864677 L9.05,26.7631397 L10.3866585,22.5211036 L6,18.5 L10.5024747,14.3727315 L9.05,9.76313972 L14.4740676,8.55961523 L15.7631397,2.75 L20.5861017,4.26970729 L24.5,0 L28.3077335,4.15389109 L32.7631397,2.75 L33.9699099,8.18869535 C34.0854066,8.2948234 34.1991153,8.40286683 34.3109857,8.51277529 L39.9461524,9.76313972 L38.49454,14.369995 L43,18.5 L38.6103562,22.5238402 L39.9461524,26.7631397 L35.1193075,27.8341489 L33.7631397,33.9461524 L31,33.0754917 L31,48 L24.5,42.7058824 L18,48 L18,33.2413215 Z M29,32.445295 L28.7479488,32.3658741 L24.5,37 L20.369995,32.49454 L20,32.6111248 L20,44.2781941 L24.5,40.3076059 L29,44.2781941 L29,32.445295 Z M33.318195,10.3411309 L32.9093374,9.93944348 C32.8133412,9.84513077 32.7157762,9.75242733 32.6166872,9.66137605 L32.153622,9.23587284 L31.2832469,5.31324949 L27.694047,6.44420043 L24.5,2.95978556 L21.1997882,6.56001663 L17.2430325,5.31324949 L16.1506904,10.236238 L11.6132495,11.2430325 L12.7927841,14.9864181 L8.95978556,18.5 L12.6769679,21.9074171 L11.6132495,25.2832469 L15.1684246,26.0720904 L15.5961176,26.5450942 C15.7080289,26.6688615 15.822498,26.7903043 15.9394435,26.9093374 L16.3411309,27.318195 L17.2430325,31.3829029 L20.9836815,30.2042306 L24.5,34.0402144 L28.1342622,30.0755647 L32.2832469,31.3829029 L33.4426847,26.1575261 L37.3829029,25.2832469 L36.3200468,21.9101536 L40.0402144,18.5 L36.2042306,14.9836815 L37.3829029,11.2430325 L33.318195,10.3411309 Z"
        />
    ),
    viewBox: '0 0 48 48',
  },
  imac: {
    shape: (
  <path d="M28.2,38 L31.1826051,42.9710085 C31.7509014,43.918169 31.4437713,45.1466895 30.4966108,45.7149859 C30.1857799,45.9014843 29.8301071,46 29.4676192,46 L18.5323808,46 C17.4278113,46 16.5323808,45.1045695 16.5323808,44 C16.5323808,43.6375121 16.6308964,43.2818393 16.8173949,42.9710085 L19.8,38 L6,38 C2.6862915,38 4.05812251e-16,35.3137085 0,32 L0,8 C-4.05812251e-16,4.6862915 2.6862915,2 6,2 L42,2 C45.3137085,2 48,4.6862915 48,8 L48,32 C48,35.3137085 45.3137085,38 42,38 L28.2,38 Z M27,36 L42,36 C44.209139,36 46,34.209139 46,32 L46,8 C46,5.790861 44.209139,4 42,4 L6,4 C3.790861,4 2,5.790861 2,8 L2,32 C2,34.209139 3.790861,36 6,36 L21,36 L27,36 Z M2,28 L46,28 L46,30 L2,30 L2,28 Z M2,8 L46,8 L46,10 L2,10 L2,8 Z M18.5323808,44 L29.4676192,44 L25.8676192,38 L22.1323808,38 L18.5323808,44 Z M24,34 C23.4477153,34 23,33.5522847 23,33 C23,32.4477153 23.4477153,32 24,32 C24.5522847,32 25,32.4477153 25,33 C25,33.5522847 24.5522847,34 24,34 Z"
  />
  ),
  viewBox: '0 0 48 48',
  },
  ps4: {
    shape: (
        <path d="M27,20 L26,20 C25.4477153,20 25,19.5522847 25,19 C25,18.4477153 25.4477153,18 26,18 L27,18 C27.5522847,18 28,18.4477153 28,19 C28,19.5522847 27.5522847,20 27,20 Z M22,20 L21,20 C20.4477153,20 20,19.5522847 20,19 C20,18.4477153 20.4477153,18 21,18 L22,18 C22.5522847,18 23,18.4477153 23,19 C23,19.5522847 22.5522847,20 22,20 Z M12,18 L14,18 L14,20 L12,20 L12,22 L10,22 L10,20 L8,20 L8,18 L10,18 L10,16 L12,16 L12,18 Z M18,13.5 L30,13.5 C32,11.1666667 34.3333333,10 37,10 C44,10 48,23 48,29 C48,32.9652806 45.3237462,36 42,36 C39.2158308,36 36.2158308,34 33,30 C31.5357919,30.6666667 30.2024585,31 29,31 C27.7975415,31 26.4642081,30 25,28 L23,28 C21.5357919,30 20.2024585,31 19,31 C17.7975415,31 16.4642081,30.6666667 15,30 C11.7841692,34 8.78416922,36 6,36 C2.67625383,36 -1.52447504e-15,32.9652806 -1.74860126e-15,29 C-1.74860126e-15,23 4,10 11,10 C13.6666667,10 16,11.1666667 18,13.5 Z M30.9198698,15.5 L17.0801302,15.5 L16.4814868,14.8015827 C14.8471539,12.894861 13.0574318,12 11,12 C6.56489117,12 2,21.7384345 2,29 C2,31.8898262 3.82450575,34 6,34 C8.04984183,34 10.5672008,32.3217607 13.4412762,28.746852 L14.4147611,27.5359861 L15.8287571,28.1797907 C17.0489157,28.7353396 18.1075574,29 19,29 C19.400626,29 20.2623709,28.3536914 21.3862445,26.8185631 L21.9855179,26 L26.0144821,26 L26.6137555,26.8185631 C27.7376291,28.3536914 28.599374,29 29,29 C29.8924426,29 30.9510843,28.7353396 32.1712429,28.1797907 L33.5852389,27.5359861 L34.5587238,28.746852 C37.4327992,32.3217607 39.9501582,34 42,34 C44.1754942,34 46,31.8898262 46,29 C46,21.7384345 41.4351088,12 37,12 C34.9425682,12 33.1528461,12.894861 31.5185132,14.8015827 L30.9198698,15.5 Z M18.5,23.5 C19.6045695,23.5 20.5,24.3954305 20.5,25.5 C20.5,26.6045695 19.6045695,27.5 18.5,27.5 C17.3954305,27.5 16.5,26.6045695 16.5,25.5 C16.5,24.3954305 17.3954305,23.5 18.5,23.5 Z M18.5,24.5 C17.9477153,24.5 17.5,24.9477153 17.5,25.5 C17.5,26.0522847 17.9477153,26.5 18.5,26.5 C19.0522847,26.5 19.5,26.0522847 19.5,25.5 C19.5,24.9477153 19.0522847,24.5 18.5,24.5 Z M29.5,23.5 C30.6045695,23.5 31.5,24.3954305 31.5,25.5 C31.5,26.6045695 30.6045695,27.5 29.5,27.5 C28.3954305,27.5 27.5,26.6045695 27.5,25.5 C27.5,24.3954305 28.3954305,23.5 29.5,23.5 Z M29.5,24.5 C28.9477153,24.5 28.5,24.9477153 28.5,25.5 C28.5,26.0522847 28.9477153,26.5 29.5,26.5 C30.0522847,26.5 30.5,26.0522847 30.5,25.5 C30.5,24.9477153 30.0522847,24.5 29.5,24.5 Z M37,17 C36.4477153,17 36,16.5522847 36,16 C36,15.4477153 36.4477153,15 37,15 C37.5522847,15 38,15.4477153 38,16 C38,16.5522847 37.5522847,17 37,17 Z M34,20 C33.4477153,20 33,19.5522847 33,19 C33,18.4477153 33.4477153,18 34,18 C34.5522847,18 35,18.4477153 35,19 C35,19.5522847 34.5522847,20 34,20 Z M40,20 C39.4477153,20 39,19.5522847 39,19 C39,18.4477153 39.4477153,18 40,18 C40.5522847,18 41,18.4477153 41,19 C41,19.5522847 40.5522847,20 40,20 Z M37,23 C36.4477153,23 36,22.5522847 36,22 C36,21.4477153 36.4477153,21 37,21 C37.5522847,21 38,21.4477153 38,22 C38,22.5522847 37.5522847,23 37,23 Z"
        />
  ),
  viewBox: '0 0 48 48',
  },
  smartphone: {
    shape: (
      <path d="M26,6 L22,6 C21.4477153,6 21,5.55228475 21,5 C21,4.44771525 21.4477153,4 22,4 L26,4 C26.5522847,4 27,4.44771525 27,5 C27,5.55228475 26.5522847,6 26,6 Z M14,0 L34,0 C37.3137085,-6.08718376e-16 40,2.6862915 40,6 L40,42 C40,45.3137085 37.3137085,48 34,48 L14,48 C10.6862915,48 8,45.3137085 8,42 L8,6 C8,2.6862915 10.6862915,6.08718376e-16 14,0 Z M14,2 C11.790861,2 10,3.790861 10,6 L10,42 C10,44.209139 11.790861,46 14,46 L34,46 C36.209139,46 38,44.209139 38,42 L38,6 C38,3.790861 36.209139,2 34,2 L14,2 Z M24,44 C23.4477153,44 23,43.5522847 23,43 C23,42.4477153 23.4477153,42 24,42 C24.5522847,42 25,42.4477153 25,43 C25,43.5522847 24.5522847,44 24,44 Z M10,38 L38,38 L38,40 L10,40 L10,38 Z M10,8 L38,8 L38,10 L10,10 L10,8 Z"
      />
    ),
    viewBox: '0 0 48 48',
    },
};

const SVG = ({ stroke, fill, width, icon, left, top, className }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    className={className}
  >
    {icons[icon].shape}
  </Wrapper>
);

export default SVG;

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['triangle', 'circle', 'arrowUp', 'upDown', 'box', 'hexa', 'badge', 'imac', 'ps4', 'smartphone']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
};

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  className: 'fancy-icon',
};
