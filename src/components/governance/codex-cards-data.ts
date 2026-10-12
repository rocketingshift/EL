import { Flame, Cpu, GitFork, Users, Globe } from "lucide-react";

export interface CodexCardData {
  id: string;
  number: string;
  code: string;
  title: string;
  tagline: string;
  product: string;
  productDesc: string;
  image: string;
  fullQuote: string;
  corePrinciple: string;
  actionLesson: string;
  icon: typeof Flame;
}

export const CODEX_CARDS: CodexCardData[] = [
  {
    id: "mat-ma-01",
    number: "01",
    code: "MẬT MÃ 01",
    title: "Khởi Nghiệp Và Giữ Nghiệp",
    tagline: "Khi bạn gần như không còn gì - đó là lúc bạn tìm ra mình thực sự là ai",
    product: "SpaceX Starship & Falcon 9",
    productDesc: "Tàu vũ trụ tái sử dụng hoàn toàn mở đường đưa nhân loại lên Sao Hỏa",
    image:
      "https://vibe.filesafe.space/1791701220283744072/assets/c5fb3369-fd3d-4852-bbbf-1228af8bf855.png",
    fullQuote: "Khởi nghiệp một công ty giống như nhai thủy tinh và nhìn chằm chằm vào vực thẳm.",
    corePrinciple: "Xác suất sống sót dưới 10% nhưng vẫn dấn thân nếu sứ mệnh đủ lớn.",
    actionLesson:
      "Không bỏ cuộc trước khi chạm tới ngưỡng cửa thành công: dồn sức vượt qua đáy của nỗi đau.",
    icon: Flame,
  },
  {
    id: "mat-ma-02",
    number: "02",
    code: "MẬT MÃ 02",
    title: "Tư Duy Nguyên Lý Gốc",
    tagline: "Khi mọi người nói 'không thể' - hãy hỏi 'tại sao lại không thể?'",
    product: "Tesla Cybertruck & Pin 4680",
    productDesc:
      "Tái định nghĩa cấu trúc xe hơi từ thép cán nguội siêu cứng và giá thành vật liệu thô",
    image:
      "https://vibe.filesafe.space/1791701220283744072/assets/60ab6129-4e48-4fd8-b30a-89f1f1293ecd.png",
    fullQuote: "Vật lý là luật. Còn những thứ khác chỉ là gợi ý.",
    corePrinciple:
      "Bóc tách vấn đề tới tận hạt nguyên tử cơ bản, không suy diễn theo lối mòn người khác.",
    actionLesson:
      "Dùng con số cây đũa thần: tính giá trị nguyên liệu thô để xác định cận dưới chi phí lý thuyết.",
    icon: Cpu,
  },
  {
    id: "mat-ma-03",
    number: "03",
    code: "MẬT MÃ 03",
    title: "Quy Trình Xây Hệ Thống",
    tagline: "Đừng tối ưu và tự động hóa thứ không đáng tồn tại",
    product: "Gigafactory Automation Line",
    productDesc: "Nhà máy sản xuất siêu tự động hóa - cỗ máy xây dựng cỗ máy",
    image:
      "https://vibe.filesafe.space/1791701220283744072/assets/5d05d6bd-ae59-4f46-91c8-a30b312319ff.png",
    fullQuote:
      "Nếu bạn không bị buộc phải thêm lại ít nhất 10% những gì bạn đã loại bỏ, bạn chưa loại bỏ đủ nhiều.",
    corePrinciple:
      "5 bước chuẩn: 1. Chất vấn yêu cầu → 2. Xóa bỏ → 3. Tối ưu → 4. Tăng tốc → 5. Tự động hóa.",
    actionLesson:
      "Sai lầm nguy hiểm nhất của kỹ sư thông minh là tối ưu hóa thứ đáng lẽ không nên tồn tại.",
    icon: GitFork,
  },
  {
    id: "mat-ma-04",
    number: "04",
    code: "MẬT MÃ 04",
    title: "Nhân Sự Xuất Sắc",
    tagline: "Công ty không phải sản phẩm. Công ty là những con người.",
    product: "Tesla Optimus & Neuralink",
    productDesc:
      "Robot hình người và giao diện não - máy tính được tạo nên bởi những kỹ sư hàng đầu thế giới",
    image:
      "https://vibe.filesafe.space/1791701220283744072/assets/26345d1b-bbbb-4552-ac3a-b74e342df2d4.png",
    fullQuote: "Điều thực sự quan trọng là liệu ai đó có một trái tim tốt hay không.",
    corePrinciple:
      "Không câu nệ bằng cấp: tìm kiếm bằng chứng năng lực thực chiến và phẩm chất đạo đức.",
    actionLesson:
      "Người thực sự giải quyết bài toán khó sẽ nhớ từng chi tiết nhỏ nhất. Đừng bao giờ bỏ qua tính cách.",
    icon: Users,
  },
  {
    id: "mat-ma-05",
    number: "05",
    code: "MẬT MÃ 05",
    title: "Triết Lý Tăng Trưởng",
    tagline: "Đừng tranh phần bánh - hãy là người làm chiếc bánh to hơn",
    product: "xAI Colossus & Starlink Constellation",
    productDesc: "Siêu cụm AI mạnh nhất hành tinh và mạng internet vệ tinh phủ sóng toàn cầu",
    image:
      "https://vibe.filesafe.space/1791701220283744072/assets/5cd48476-edcb-478f-8fe9-7de4713c4f8a.png",
    fullQuote:
      "Bạn có đang đóng góp nhiều hơn những gì bạn tiêu thụ không? Hãy sống một cuộc đời hữu ích.",
    corePrinciple: "Phá vỡ bẫy tư duy tổng bằng 0: mở rộng chiếc bánh kinh tế của toàn nhân loại.",
    actionLesson:
      "Đọc thật rộng để thấy bản đồ tri thức thế giới, tìm điểm giao thoa giữa tài năng và đam mê.",
    icon: Globe,
  },
];
