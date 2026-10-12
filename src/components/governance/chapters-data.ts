import type { ComponentType } from "react";
import { Flame, Cpu, Settings2, UserCheck, Globe2 } from "lucide-react";

// Cinematic still images (cinematic Hollywood epic, modern, featuring Elon Musk)
const IMG_01 =
  "https://vibe.filesafe.space/1791701220283744072/assets/b3530c05-0801-4f90-bcf5-2fd86a994e2a.png";
const IMG_02 =
  "https://vibe.filesafe.space/1791701220283744072/assets/c6ebe1df-98ca-417c-854e-ce4445131893.png";
const IMG_03 =
  "https://vibe.filesafe.space/1791701220283744072/assets/19ebdd1f-2499-4ec9-8e86-bfa535cb0ce7.png";
const IMG_04 =
  "https://vibe.filesafe.space/1791701220283744072/assets/3e24cf81-a293-4860-b3aa-3419ffdd705f.png";
const IMG_05 =
  "https://vibe.filesafe.space/1791701220283744072/assets/df393500-f96a-492e-9a37-473dc1422e68.png";

export type SceneKey = "falcon" | "atom" | "gears" | "constellation" | "sphere";

export type VizKey = "timeline2008" | "costbars" | "piegrowth";

export type Block =
  | { t: "p"; text: string }
  | { t: "q"; text: string } // Elon spoken quote
  | { t: "h"; text: string } // inline heading (e.g. "Bài học:")
  | { t: "pull"; text: string } // big mid-chapter pull quote (verbatim)
  | {
      t: "choice";
      title: string;
      options: string[];
      chosen: string;
      reason: string;
    }
  | {
      t: "steps";
      steps: { step: string; title: string; desc: string; detail?: string }[];
    }
  | { t: "lesson"; text: string }
  | { t: "viz"; viz: VizKey };

export interface Chapter {
  id: string;
  code: string;
  number: string;
  subtitle: string;
  tagline: string;
  icon: ComponentType<{ className?: string }>;
  tags: string[];
  image: string;
  scene: SceneKey;
  blocks: Block[];
}

export const SECTION_TITLE = "MẬT MÃ QUẢN TRỊ";
export const SECTION_SUBTITLE =
  "Những nguyên tắc được viết bằng máu, mồ hôi - và những lần tên lửa nổ tung";

export const PREAMBLE: string[] = [
  "Có những người thành công vì may mắn.",
  "Có những người thành công vì tài năng.",
  "Và có một người - đặt cược toàn bộ gia sản vào hai công ty gần phá sản cùng lúc, với xác suất thành công dưới 10% - và vẫn đứng vững.",
  "Elon Musk không phải huyền thoại được dựng lên từ Hollywood.",
  "Ông là bằng chứng sống của 5 nguyên tắc - được thử lửa trong những khoảnh khắc tăm tối nhất của sự nghiệp.",
];

export const CHAPTERS: Chapter[] = [
  {
    id: "mat-ma-01",
    code: "DOSSIER // CODE_01",
    number: "01",
    subtitle: "Khởi Nghiệp Và Giữ Nghiệp",
    tagline: "Khi bạn gần như không còn gì - đó là lúc bạn tìm ra mình thực sự là ai",
    icon: Flame,
    tags: ["XÁC SUẤT < 10%", "GIÁNG SINH 2008", "FALCON 1", "TESLA & SPACEX"],
    image: IMG_01,
    scene: "falcon",
    blocks: [
      {
        t: "p",
        text: "Hãy tưởng tượng bạn thức dậy vào một buổi sáng Chủ Nhật, ngay trước Giáng Sinh.",
      },
      { t: "p", text: "Bên ngoài trời lạnh. Bên trong - mọi thứ còn lạnh hơn." },
      { t: "p", text: "Elon Musk kể lại khoảnh khắc đó như thế này:" },
      {
        t: "q",
        text: "Tôi chợt nghĩ: 'Trước giờ mình chưa từng tin rằng bản thân có thể sụp đổ tinh thần.' Nhưng khoảnh khắc ấy, tôi cảm thấy mình đã ở gần ranh giới đó hơn bao giờ hết. Mọi thứ xung quanh đều khá là đen tối.",
      },
      { t: "p", text: "Đó là năm 2008." },
      {
        t: "p",
        text: "Vài năm trước, ông bán PayPal và thu về 180 triệu đô la. Ông rót một nửa vào SpaceX, Tesla và SolarCity - tin rằng 90 triệu còn lại là đủ. Nhưng chi phí cao hơn dự kiến. Thời gian lâu hơn dự kiến. Đến năm 2008, chỉ còn 30–40 triệu đô - và hai công ty đều đang hấp hối.",
      },
      { t: "p", text: "Ông đứng trước lựa chọn không có đáp án đúng:" },
      {
        t: "choice",
        title: "MA TRẬN QUYẾT ĐỊNH 2008",
        options: [
          "Dồn tất cả vào SpaceX → Tesla chết.",
          "Dồn tất cả vào Tesla → SpaceX chết.",
          "Chia đôi → cả hai có thể cùng chết.",
        ],
        chosen: "Chia đôi.",
        reason: "Không phải vì đó là lựa chọn tối ưu. Mà vì:",
      },
      {
        t: "pull",
        text: "Khi bạn đã đổ máu, mồ hôi, nước mắt để gây dựng một thứ, nó giống như đứa con tinh thần của bạn vậy. Bạn sẽ không nỡ để một đứa bị chết vì đói.",
      },
      {
        t: "p",
        text: "Cùng thời điểm đó, SpaceX vừa thất bại lần phóng tên lửa Falcon thứ 3 liên tiếp.",
      },
      {
        t: "p",
        text: "Nhóm kỹ sư gồng mình tập hợp toàn bộ sức lực tàn còn lại. Tiền gần cạn. Tinh thần gần kiệt. Ai cũng biết: nếu lần thứ 4 này thất bại: mọi chuyện kết thúc. Mãi mãi.",
      },
      { t: "p", text: "Tên lửa rời bệ phóng." },
      { t: "p", text: "Lần này nó bay!" },
      {
        t: "q",
        text: "Nasa gọi cho chúng tôi và thông báo chúng tôi nhận được hợp đồng 1,5 tỷ đô. Tôi thậm chí không thể cầm nổi điện thoại nữa. Tôi chỉ có thể thốt lên với đối tác rằng: tôi yêu các bạn quá. Thực sự là họ đã cứu chúng tôi, cả về vật chất và tinh thần.",
      },
      {
        t: "p",
        text: "Tesla chốt vòng gọi vốn lúc 6 giờ chiều ngày Giáng Sinh - đúng giờ cuối cùng trước khi phá sản.",
      },
      { t: "viz", viz: "timeline2008" },
      { t: "p", text: "Nhưng đây không phải câu chuyện về may mắn." },
      { t: "p", text: "Elon biết rõ xác suất ngay từ đầu:" },
      {
        t: "q",
        text: "Ngay từ đầu tôi đã đánh giá cả SpaceX và Tesla chỉ có dưới 10% khả năng thành công.",
      },
      { t: "p", text: "Ông biết. Và ông vẫn làm." },
      { t: "p", text: "Vì ông làm việc theo một cách mà rất ít người dám:" },
      {
        t: "q",
        text: "Khi anh trai tôi và tôi bắt đầu công ty đầu tiên, thay vì thuê căn hộ chúng tôi chỉ thuê một văn phòng nhỏ và ngủ ngay trên ghế sofa. Chúng tôi tắm ở nhà tắm công cộng, chỉ có một cái máy tính. Ban ngày website được mở cho khách, còn ban đêm tôi viết code, bảy ngày một tuần, liên tục.",
      },
      { t: "p", text: "Toán học rất đơn giản:" },
      {
        t: "q",
        text: "Nếu ai đó làm 50 giờ một tuần và bạn làm 100 giờ, bạn sẽ hoàn thành gấp đôi trong một năm so với họ.",
      },
      { t: "h", text: "Bài học:" },
      { t: "p", text: "Một người bạn của Elon có câu nói mà ông luôn nhớ:" },
      {
        t: "q",
        text: "Khởi nghiệp một công ty giống như nhai thủy tinh và nhìn chằm chằm vào vực thẳm.",
      },
      {
        t: "p",
        text: "Hạnh phúc lúc đầu luôn rất cao. Rồi bạn gặp vô số vấn đề. Rồi bạn chạm đáy của nỗi đau. Và nếu — chỉ nếu — bạn không nhả ra, sau một thời gian rất dài, bạn mới quay lại được với cảm giác hạnh phúc.",
      },
      {
        t: "p",
        text: "Phần lớn người không đến được đó. Không phải vì họ không tài năng, mà vì họ dừng lại sớm hơn một ngày so với ngưỡng cửa của thành công.",
      },
    ],
  },
  {
    id: "mat-ma-02",
    code: "DOSSIER // CODE_02",
    number: "02",
    subtitle: "Tư Duy Nguyên Lý Gốc",
    tagline: 'Khi mọi người nói "không thể" - hãy hỏi "tại sao lại không thể?"',
    icon: Cpu,
    tags: ["FIRST PRINCIPLES", "QUY LUẬT VẬT LÝ", "CÂY ĐỦA THẦN", "GIỚI HẠN THỰC THỂ"],
    image: IMG_02,
    scene: "atom",
    blocks: [
      { t: "p", text: "Có một câu hỏi mà Elon Musk hỏi khác với hầu hết mọi người." },
      {
        t: "p",
        text: 'Khi ai đó nói "Tên lửa đắt lắm, không thể rẻ hơn được" - hầu hết sẽ gật đầu và chấp nhận. Elon hỏi: "Tại sao? Tính từ đầu đi."',
      },
      {
        t: "p",
        text: "Ông lấy tờ giấy và tính toán: một tên lửa gồm những vật liệu gì? Nhôm, thép, titan, hợp kim... Nếu mua toàn bộ nguyên liệu thô đó trên thị trường, chi phí là bao nhiêu?",
      },
      { t: "p", text: "Con số hiện ra: thấp hơn giá tên lửa thương mại đến 50–70 lần." },
      { t: "viz", viz: "costbars" },
      {
        t: "p",
        text: "Vậy thứ khiến tên lửa đắt không phải nguyên liệu. Mà là cách người ta đã quen làm và chưa ai chịu đặt câu hỏi.",
      },
      { t: "p", text: "Đây chính là tư duy nguyên lý gốc. Và Elon mô tả nó như sau:" },
      {
        t: "q",
        text: "Hãy phân tích, bóc tách một vấn đề đến mức cơ bản nhất, gốc rễ nhất, tới mức những nguyên lý gốc mà ta chắc chắn là đúng, rồi xây dựng suy luận từ cơ sở đó.",
      },
      {
        t: "p",
        text: 'Phần lớn chúng ta tư duy theo kiểu tương tự: "Người khác làm vậy thì mình cũng làm vậy." Cách này tiết kiệm thời gian, nhưng nó cũng nhốt bạn trong những giới hạn của người đi trước.',
      },
      {
        t: "p",
        text: 'Tư duy nguyên lý gốc thì khác. Nó hỏi: "Điều gì là sự thật tuyệt đối ở đây? Điều gì chắc chắn đúng dù ai nói gì?"',
      },
      {
        t: "pull",
        text: "Vật lý là luật. Còn những thứ khác chỉ là gợi ý. Tôi từng gặp nhiều người có thể phá các luật lệ, nhưng chưa gặp ai phá được các quy luật vật lý.",
      },
      {
        t: "p",
        text: "Và từ nền tảng chắc chắn đó, ông thêm một công cụ nữa: suy nghĩ ở giới hạn.",
      },
      { t: "p", text: "Lấy một biến số, đẩy đến cực đại hoặc cực tiểu, và xem điều gì thay đổi." },
      {
        t: "p",
        text: "Ví dụ: Nếu sản xuất một triệu đơn vị mỗi năm: sản phẩm này có còn đắt không? Nếu vẫn đắt, thì vấn đề không phải quy mô sản xuất, mà là bản chất thiết kế. Khi đó bạn cần đổi hướng: không phải mở rộng nhà máy, mà là thiết kế lại từ đầu.",
      },
      { t: "p", text: 'Ông còn chia sẻ một cách tiếp cận mà ông gọi là "con số cây đũa thần":' },
      {
        t: "q",
        text: "Tính giá trị nguyên liệu thô của tất cả các thành phần - nó sẽ cho bạn giới hạn tiệm cận của chi phí tối thiểu. Nếu bạn chỉ có một đống nguyên liệu thô và có một cây đũa thần có thể sắp xếp các nguyên tử thành đúng hình dạng bạn muốn - đó là chi phí thấp nhất bạn có thể đạt được. Và con số đó thường rất thấp.",
      },
      { t: "p", text: "Từ đó ông đặt ra hai câu hỏi song song khi xây bất cứ thứ gì:" },
      { t: "p", text: "Chúng ta có thể tạo ra gì với công cụ hiện có?" },
      { t: "p", text: "Và đồng thời: Hình mẫu hoàn hảo về mặt lý thuyết sẽ trông như thế nào?" },
      { t: "p", text: "Rồi tìm cách thu hẹp khoảng cách giữa hai câu trả lời đó." },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Hầu hết mọi người không biết mình đang bị giam cầm bởi những giả định sai, vì chưa ai bảo họ đó là giả định. Tư duy nguyên lý gốc không phải thiên tài. Đó là thói quen hỏi đúng câu hỏi - trước khi tìm câu trả lời. Và đó là thứ bạn có thể luyện tập, bắt đầu ngay hôm nay.",
      },
    ],
  },
  {
    id: "mat-ma-03",
    code: "DOSSIER // CODE_03",
    number: "03",
    subtitle: "Quy Trình Xây Hệ Thống",
    tagline: "Đừng tự động hóa thứ không đáng tồn tại, và đừng tối ưu thứ chưa được đặt câu hỏi",
    icon: Settings2,
    tags: ["5-STEP ALGORITHM", "LOẠI BỎ 10%+", "TỐI ƯU HÓA", "TỰ ĐỘNG HÓA"],
    image: IMG_03,
    scene: "gears",
    blocks: [
      {
        t: "p",
        text: "Có một sai lầm mà Elon Musk thừa nhận mình đã mắc phải - nhiều lần hơn ông muốn nhớ.",
      },
      {
        t: "p",
        text: "Đó là đi ngược quy trình: tự động hóa trước, rồi mới tìm cách tối ưu, rồi mới loại bỏ những thứ không cần thiết.",
      },
      {
        t: "p",
        text: "Kết quả? Lãng phí vô số công sức để xây một thứ hoàn hảo, mà đáng lẽ không nên tồn tại từ đầu.",
      },
      {
        t: "pull",
        text: "Nói 'hãy đơn giản hóa' thì dễ, nhưng để thực sự làm được thì cực kỳ khó.",
      },
      {
        t: "p",
        text: "Từ những lần vấp ngã đó, ông đúc kết ra một câu thần chú: một quy trình 5 bước mà ông áp dụng cho mọi thứ: từ dây chuyền lắp ráp tên lửa đến quy trình vận hành nội bộ.",
      },
      {
        t: "steps",
        steps: [
          {
            step: "BƯỚC 1",
            title: "Làm cho các yêu cầu bớt ngu ngốc",
            desc: "Trước khi làm bất cứ điều gì, hãy chất vấn yêu cầu.",
            detail:
              '"Các yêu cầu luôn ngu ngốc ở một mức độ nào đó. Dù người đưa ra yêu cầu có thông minh đến đâu, yêu cầu vẫn sẽ sai một phần nào đó."\n\nNếu bạn tối ưu hóa câu trả lời cho một câu hỏi sai - bạn đang lãng phí toàn bộ nguồn lực. Vì vậy hãy bắt đầu bằng cách hỏi: câu hỏi này có thực sự đúng không?',
          },
          {
            step: "BƯỚC 2",
            title: "Loại bỏ",
            desc: "Không phải thu gọn. Không phải tinh giản. Mà là xóa hẳn, rồi xem có ai nhớ ra nó cần thiết không.",
            detail:
              '"Nếu bạn không bị buộc phải thêm lại ít nhất 10% những gì bạn đã loại bỏ, tức là bạn chưa loại bỏ đủ nhiều."\n\nÔng chia sẻ một nghịch lý thú vị: phần lớn mọi người cảm thấy mình làm tốt khi không phải thêm gì trở lại. Nhưng thực ra điều đó chứng tỏ họ vẫn còn giữ quá nhiều thứ không cần thiết, vì họ quá thận trọng để thử xóa hẳn.\n\n"Tôi đã nhiều lần đề nghị loại bỏ một thứ gì đó và có thể thấy rõ sự đau đớn trên mặt mọi người. Tôi nói trước với họ: \'Một số thứ chúng ta loại bỏ sẽ phải thêm lại.\' Điều đó hơi sốc, nhưng nó hợp lý."',
          },
          {
            step: "BƯỚC 3",
            title: "Tối ưu hóa",
            desc: "Chỉ đến bước này. Không sớm hơn.",
            detail:
              '"Sai lầm phổ biến nhất của những kỹ sư thông minh là tối ưu hóa một thứ không đáng tồn tại ngay từ đầu."',
          },
          {
            step: "BƯỚC 4",
            title: "Tăng tốc",
            desc: "Bất cứ việc gì cũng có thể làm nhanh hơn. Nhưng đừng tăng tốc một thứ chưa được tối ưu. Bạn chỉ đang làm sai nhanh hơn.",
          },
          {
            step: "BƯỚC 5",
            title: "Tự động hóa",
            desc: "Bước cuối cùng - không phải bước đầu tiên.",
            detail:
              "Đây là nơi hầu hết mọi người nhảy vào trước. Họ mua công cụ, xây hệ thống, tự động hóa quy trình - rồi mới phát hiện ra rằng quy trình đó không nên tồn tại từ đầu.",
          },
        ],
      },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Thứ tự tạo ra sự khác biệt giữa thiên tài và lãng phí. Trước khi xây - hỏi thứ mà bạn định xây có nên tồn tại không. Trước khi tối ưu - hãy loại bỏ những gì không cần thiết. Trước khi tăng tốc - hãy đảm bảo bạn đang đi đúng hướng. Và chỉ khi tất cả đã đúng - lúc đó mới tự động hóa. Đó là cách Elon xây những thứ mà người khác nói là không thể.",
      },
    ],
  },
  {
    id: "mat-ma-04",
    code: "DOSSIER // CODE_04",
    number: "04",
    subtitle: "Nhân Sự Xuất Sắc",
    tagline:
      "Công ty không phải là sản phẩm. Công ty là những con người, và điều đó quyết định tất cả",
    icon: UserCheck,
    tags: ["TRỰC TIẾP PHỎNG VẤN", "KHÔNG BẰNG CẤP", "VẬT LỘN MẠNH MẼ", "TRÁI TIM TỐT"],
    image: IMG_04,
    scene: "constellation",
    blocks: [
      {
        t: "p",
        text: "Có một điều Elon Musk làm mà hầu hết CEO của công ty lớn không làm: ông trực tiếp phỏng vấn tất cả mọi người ở SpaceX.",
      },
      { t: "p", text: "Không ủy quyền. Không bỏ qua. Tất cả." },
      {
        t: "p",
        text: "Vì với ông, không có quyết định nào quan trọng hơn quyết định bạn chọn ai ngồi cạnh mình.",
      },
      {
        t: "q",
        text: "Nếu bạn đang tạo ra một công ty, điều quan trọng nhất là thu hút được những con người xuất sắc. Toàn bộ một công ty chỉ là một nhóm người tập hợp lại để tạo ra một sản phẩm hoặc dịch vụ và tùy thuộc vào việc nhóm đó tài năng và chăm chỉ đến đâu, điều đó sẽ quyết định sự thành công của công ty.",
      },
      { t: "p", text: "Vậy ông tìm gì khi phỏng vấn?" },
      { t: "p", text: "Không phải bằng cấp. Ông nói thẳng:" },
      {
        t: "q",
        text: "Không nhất thiết người được tuyển phải có bằng đại học, thậm chí không cần bằng trung học. Nếu bạn nhìn vào những người như Bill Gates, Larry Ellison, Steve Jobs... những người này đều không tốt nghiệp đại học. Nhưng nếu bạn có cơ hội thuê họ thì tất nhiên đó là một ý tưởng tuyệt vời.",
      },
      { t: "p", text: "Thứ ông thực sự tìm kiếm là bằng chứng năng lực xuất chúng." },
      { t: "p", text: "Cách ông phỏng vấn rất đơn giản và rất tinh tế:" },
      {
        t: "q",
        text: "Tôi thực sự chỉ yêu cầu họ kể cho tôi nghe câu chuyện về sự nghiệp của họ, và những vấn đề khó khăn nhất mà họ từng phải đối mặt, cách họ xử lý những vấn đề đó, và cách họ đưa ra quyết định ở những điểm chuyển giao quan trọng.",
      },
      {
        t: "p",
        text: "Ông giải thích lý do: người thực sự là người chịu trách nhiệm cho một thành tựu sẽ nhớ từng chi tiết, vì đó là vấn đề của họ, không phải của ai khác. Còn người không chịu trách nhiệm thực sự sẽ mờ nhạt khi bạn hỏi sâu hơn.",
      },
      {
        t: "q",
        text: "Thông thường, người nào đã phải vật lộn với một vấn đề thì họ thật sự hiểu rõ vấn đề đó. Bạn có thể hỏi những câu rất chi tiết và họ sẽ biết câu trả lời.",
      },
      {
        t: "p",
        text: "Nhưng có một bài học ông học được theo cách đau đớn nhất và ông sẵn sàng thừa nhận:",
      },
      {
        t: "q",
        text: "Sai lầm lớn nhất mà tôi từng mắc phải, và tôi luôn cố gắng sửa chữa, là đặt quá nhiều trọng số vào tài năng của ai đó mà không đủ vào tính cách của họ. Tôi đã mắc sai lầm đó vài lần. Thật sự. Tôi đã nói rằng: 'Được rồi, mình sẽ không mắc sai lầm đó nữa' và rồi tôi lại mắc lại.",
      },
      {
        t: "p",
        text: "Vì vậy, bên cạnh năng lực, ông tìm thêm hai thứ nữa: thái độ tích cực - người đó có dễ làm việc cùng không, những người xung quanh có thích cộng tác với họ không, và một thứ mà ông gọi là yếu tố quyết định cuối cùng:",
      },
      {
        t: "pull",
        text: "Điều thực sự quan trọng là liệu ai đó có một trái tim tốt hay không. Thật sự đấy.",
      },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: 'Một người tài năng nhưng không có tính cách tốt sẽ phá hoại nhiều hơn xây dựng. Khi bạn chọn người đồng hành hãy hỏi không chỉ "Họ có giỏi không?" mà còn "Họ đã từng thực sự vật lộn với điều khó khăn và vượt qua chưa? Những người xung quanh có muốn làm việc với họ không? Và họ có trái tim tốt không?" Ba câu hỏi đó - đôi khi quan trọng hơn cả CV.',
      },
    ],
  },
  {
    id: "mat-ma-05",
    code: "DOSSIER // CODE_05",
    number: "05",
    subtitle: "Triết Lý Tăng Trưởng",
    tagline: "Đừng tranh phần bánh - hãy là người làm chiếc bánh to hơn",
    icon: Globe2,
    tags: ["MỞ RỘNG CHIẾC BÁNH", "TƯ DUY TỔNG KHÁC ZERO", "ĐỌC SÁCH RỘNG", "ĐÓNG GÓP TÍCH CỰC"],
    image: IMG_05,
    scene: "sphere",
    blocks: [
      {
        t: "p",
        text: "Có một câu hỏi mà Elon Musk đặt ra, và ông tin rằng câu trả lời của bạn sẽ định hình toàn bộ cách bạn sống và làm việc:",
      },
      { t: "pull", text: "Bạn đang đóng góp nhiều hơn hay tiêu thụ nhiều hơn?" },
      {
        t: "p",
        text: "Không phải câu hỏi về tiền bạc. Không phải câu hỏi về năng suất. Mà là câu hỏi về chiều hướng của cuộc đời bạn.",
      },
      {
        t: "p",
        text: "Ông quan sát thấy một điều thú vị: nhiều người thông minh, kể cả những người rất thành công, đôi khi hành động theo cách mơ hồ về đạo đức. Và nguyên nhân gốc rễ thường không phải là xấu xa, mà là một thứ họ thậm chí không nhận ra trong bản thân:",
      },
      { t: "p", text: "Tư duy tổng bằng 0." },
      {
        t: "q",
        text: "Đối với người có tư duy tổng bằng 0, cách duy nhất để tiến lên là phải lấy bớt từ người khác. Nếu bạn tin rằng chiếc bánh là cố định, thì cách duy nhất để có thêm bánh là lấy phần bánh của người khác.",
      },
      {
        t: "p",
        text: "Nhưng điều đó sai. Chiếc bánh không cố định - nó đã tăng trưởng khổng lồ theo suốt lịch sử nhân loại. Và những người thực sự tạo ra sự khác biệt không phải người giỏi tranh giành - mà là người giỏi tạo ra điều mới.",
      },
      {
        t: "q",
        text: "Hãy tập trung vào việc mở rộng chiếc bánh kinh tế. Hãy đóng góp nhiều hơn mức bạn tiêu thụ. Hãy làm nhiều hơn những gì bạn nhận.",
      },
      { t: "viz", viz: "piegrowth" },
      { t: "p", text: "Vậy bạn bắt đầu từ đâu? Với Elon, câu trả lời luôn là: đọc." },
      {
        t: "q",
        text: "Tôi khuyến khích mọi người đọc thật nhiều sách - gần như là đọc bất cứ thứ gì. Hãy cố gắng tiếp nhận càng nhiều thông tin càng tốt và phát triển một nền tảng kiến thức tổng quát vững vàng.",
      },
      {
        t: "p",
        text: "Khi còn nhỏ, ông đọc hết bộ bách khoa toàn thư. Ông kể lại rằng đó là lúc ông khám phá ra những lĩnh vực mà trước đó ông thậm chí không biết là tồn tại. Đọc rộng không chỉ cho bạn kiến thức, nó cho bạn thấy bản đồ của cả thế giới, để bạn biết mình đang đứng ở đâu và muốn đi về hướng nào.",
      },
      {
        t: "p",
        text: "Từ đó, ông đưa ra lời khuyên mà ông gọi là quan trọng nhất cho bất kỳ ai đang tìm hướng đi:",
      },
      {
        t: "q",
        text: "Hãy đọc thật rộng trong nhiều lĩnh vực khác nhau, rồi cố gắng tìm ra thứ gì đó nơi tài năng của bạn giao thoa với điều bạn yêu thích. Có người giỏi một việc gì đó nhưng lại không thích làm điều đó. Vì vậy bạn nên cố gắng tìm ra điều mà bạn vừa bẩm sinh giỏi, vừa yêu thích.",
      },
      {
        t: "p",
        text: "Và cuối cùng, ông nhắc lại câu hỏi cốt lõi - câu hỏi mà ông nghĩ mỗi người đều nên đặt ra cho chính mình mỗi ngày:",
      },
      {
        t: "q",
        text: "Bạn có đang đóng góp nhiều hơn những gì bạn tiêu thụ không? Bạn có thể cố gắng để có một đóng góp tích cực ròng cho xã hội không? Nếu bạn có thể sống một cuộc đời hữu ích - đó là một cuộc đời tốt, một cuộc đời đáng sống.",
      },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Người xây dựng điều mới luôn thắng về dài hạn - không phải vì họ giỏi hơn người khác trong việc tranh giành, mà vì họ đang chơi một trò chơi khác. Khi bạn tập trung vào việc tạo ra giá trị thật, bạn không cần lấy từ ai. Bạn đang mở rộng chiếc bánh cho tất cả. Và đó là điều còn lại sau khi mọi thứ khác đã qua đi.",
      },
    ],
  },
];
