export interface Posts {
  kind: string;
  data: Data;
}

export interface Data {
  // How many posts  
  //dist: number;
  children: Child[];
}

export interface Child {
  //kind: string;
  data: Post;
}

export interface Post {
  subreddit: string;
  author_fullname: string;
  title: string;
  subreddit_name_prefixed: string;
  downs: number;
  ups: number;
  secure_media?: Securemedia;
  thumbnail: string; // image
//  suggested_sort?: string;
//  preview: Preview; //Showing as Forbidden
//  id: string;
  author: string; //readable name
  permalink: string; // 
  url: string; // actual link to post
  //can show video
  //media?: Securemedia;
  //is_video: boolean;
}

export interface Securemedia {
  reddit_video?: Redditvideo;
  type?: string;
  oembed?: Oembed;
}

export interface Redditvideo {
    fallback_url: string;
    height: number;
    width: number;
    //scrubber_media_url: string; // small video
    //dash_url: string;
    //duration: number;
    //hls_url: string;
    is_gif: boolean;
    //transcoding_status: string;
}

export interface Oembed {
//   provider_url: string;
//   description?: string;
//   title: string;
//   type: string;
//   author_name?: string;
//   height: number;
//   width: number;
//   html: string;
//   thumbnail_width?: number;
//   version: string;
//   provider_name: string;
  thumbnail_url: string;
  //thumbnail_height?: number;
}

// interface Mediaembed {
//     content?: string;
//     width?: number;
//     scrolling?: boolean;
//     height?: number;
// }

// interface Securemediaembed {
//     content?: string;
//     width?: number;
//     scrolling?: boolean;
//     media_domain_url?: string;
//     height?: number;
// }

// interface Preview {
//   images: Image[];
//   enabled: boolean;
//   reddit_video_preview?: Redditvideo;
// }

//Giving a 403 error when clicking on links
// interface Image {
//   source: Source;
//   resolutions: Source[];
//   variants: Variants;
//   id: string;
// }

// interface Variants {
//   gif?: Gif;
//   mp4?: Gif;
// }

// interface Gif {
//   source: Source;
//   resolutions: Source[];
// }

// interface Source {
//   url: string;
//   width: number;
//   height: number;
// }








